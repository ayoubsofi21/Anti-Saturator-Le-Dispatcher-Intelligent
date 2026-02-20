import { headerFun, btnNumber, btnQuestion, btnNext } from "./modules/ui.js";
import { showQuestion, questions } from "./modules/quiz.js"; // Ensure questions are imported

// Select the container and set up the initial HTML structure
const container = document.querySelector(".container");

container.innerHTML = `
    ${headerFun()}
    ${btnNumber()}
    ${btnQuestion()}
    ${btnNext()}
`;

let currentQuestion = 0; // Start from the first question
let selectedAnswer = null; // No answer selected initially

// Get the elements for later use (ensure these are accessible after HTML content is rendered)
const title = document.querySelector("h1");
const answerButtons = document.querySelectorAll(".question button");
const nextBtn = document.querySelector(".btn");
const circleButtons = document.querySelectorAll(".bouton-cercle");

// Create and append an error message for unselected answers
const message = document.createElement("p");
message.style.color = "red";
message.style.textAlign = "center";
message.style.marginTop = "10px";
document.querySelector(".question").appendChild(message);

// Call the function to show the first question
showQuestion(currentQuestion);

// Handle answer selection
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedAnswer = button.textContent;

    // Provide visual feedback when a button is selected
    answerButtons.forEach((btn) => (btn.style.backgroundColor = ""));
    button.style.backgroundColor = "#7174d3";

    // Clear the error message if an answer is selected
    message.textContent = "";
  });
});

// Handle "Next" button click
nextBtn.addEventListener("click", () => {
  // If no answer is selected, show an error message
  if (selectedAnswer === null) {
    message.textContent = "Veuillez choisir une réponse avant de continuer.";
    return;
  }

  // Move to the next question
  currentQuestion++;

  // If there are more questions, show the next one, otherwise finish the quiz
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion); // This will update the question UI
    selectedAnswer = null; // Reset selected answer for the next question
  } else {
    document.querySelector(".question").style.display = "none"; // Hide the question section
    nextBtn.textContent = "Quiz terminé 🎉"; // Change the button text
    message.textContent = ""; // Clear the error message
  }
});
