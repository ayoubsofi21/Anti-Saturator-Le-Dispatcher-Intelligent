const quizQuestions = [
  {
    question: "Combien d'heures dors-tu en moyenne ?",
    answers: [
      { value: "1", text: "Moins de 5 heures" },
      { value: "2", text: "5–6 heures" },
      { value: "3", text: "7–8 heures" },
      { value: "4", text: "Plus de 8 heures et je me réveille reposé" },
    ],
  },
  {
    question: "Quel est ton niveau de stress au travail ?",
    answers: [
      { value: "1", text: "Très faible" },
      { value: "2", text: "Modéré" },
      { value: "3", text: "Élevé" },
      { value: "4", text: "Très élevé" },
    ],
  },
  {
    question: "À quelle fréquence fais-tu de l'exercice physique ?",
    answers: [
      { value: "1", text: "Jamais" },
      { value: "2", text: "1 à 2 fois par semaine" },
      { value: "3", text: "3 à 4 fois par semaine" },
      { value: "4", text: "Tous les jours" },
    ],
  },
];
let currentQuestion = 1; // Start at the first question
let energyScore = 5; // Default energy score

export function renderQuiz() {
  const container = document.getElementById("quiz-container");

  // Check if we've completed the quiz
  if (currentQuestion > quizQuestions.length) {
    container.innerHTML = `
      <h3>Félicitations !</h3>
      <p>Vous avez terminé le quiz avec une énergie de ${energyScore}</p>
      <button id="start-again">Recommencer</button>
    `;

    // Restart the quiz if "Recommencer" button is clicked
    document.getElementById("start-again").addEventListener("click", () => {
      currentQuestion = 1; // Reset to first question
      energyScore = 5; // Reset energy score
      renderQuiz(); // Re-render the quiz from the beginning
    });

    return; // Stop further rendering once the quiz is completed
  }

  // If not completed, continue to render the next question
  container.innerHTML = `
    <form id="quiz-form">
      <h3>Question ${currentQuestion}:</h3>
      ${getQuestionMarkup(currentQuestion)} <!-- Dynamically insert question markup -->
      <button type="button" id="next-btn">Next</button>
    </form>
  `;

  // Add event listener to "Next" button
  document.getElementById("next-btn").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission

    // Save the user's choice
    const selectedAnswer = document.querySelector(".quiz-button.active");
    if (!selectedAnswer) return; // Do nothing if no answer is selected

    // Save the energy score based on selected answer
    energyScore = parseInt(selectedAnswer.value);

    // Move to next question
    if (currentQuestion < quizQuestions.length) {
      currentQuestion++;
      renderQuiz(); // Re-render the quiz with the next question
    } else {
      alert(`Vous avez terminé le quiz avec une énergie de ${energyScore}`);
      renderQuiz(); // Trigger final state rendering after quiz completion
    }
  });

  // Add event listeners to the answer buttons
  const quizButtons = document.querySelectorAll(".quiz-button");
  quizButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Highlight the clicked button (active state)
      quizButtons.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
}

// Function to get the markup for each question dynamically
function getQuestionMarkup(questionNumber) {
  const question = quizQuestions[questionNumber - 1]; // Adjust for zero-based index
  if (!question) return ""; // If no question exists, return an empty string

  // Build the question and answers dynamically
  let markup = `<h3>${question.question}</h3>`;

  // Loop through the answers and create buttons for each one
  question.answers.forEach((answer) => {
    markup += `
      <button type="button" class="quiz-button" value="${answer.value}">${answer.text}</button>
    `;
  });

  return markup;
}

export function getEnergyScore() {
  return energyScore;
}
