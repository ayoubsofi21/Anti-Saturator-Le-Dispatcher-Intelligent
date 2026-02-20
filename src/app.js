import {
  calculateScore,
  adaptScoreToEnergy,
  sortTasks,
} from "./modules/sorter.js";
const tasks = [
  { id: 1, title: "Task A", urgency: 5, importance: 5, effort: 2 },
  { id: 2, title: "Task B", urgency: 3, importance: 4, effort: 1 },
  { id: 3, title: "Task C", urgency: 4, importance: 4, effort: 2 },
  { id: 4, title: "Big Project", urgency: 5, importance: 5, effort: 5 },
];
tasks.forEach((task) => {
  console.log(`Score(${task.title})`, calculateScore(task));
  console.log(task.title, adaptScoreToEnergy(task, 2));
});
console.table(sortTasks(tasks, 5));
import { getTasks } from "./storage.js";
import {headerfunc,formulair, button,supprimer} from "./src/moules/ui.js";
const main = document.querySelector(".main");

main.innerHTML = `
${headerfunc()}
${formulair()}
${button()}
${supprimer()}

`

const tasks = getTasks();
console.log(tasks);
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
