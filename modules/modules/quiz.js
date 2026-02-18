// Sélection des éléments
const title = document.querySelector("h1");
const answerButtons = document.querySelectorAll(".question button");
const nextBtn = document.querySelector(".btn");
const circleButtons = document.querySelectorAll(".bouton-cercle");

// Questions
const questions = [
  {
    question: "Combien d’heures dors-tu en moyenne ?",
    answers: [
      "Moins de 5 heures",
      "5–6 heures",
      "Plus de 8 heures",
      "7–8 heures"
    ]
  },
  {
    question: "Combien d’heures passes-tu sur ton téléphone ?",
    answers: [
      "Moins de 2h",
      "2–4h",
      "5–7h",
      "Plus de 8h"
    ]
  },
  {
    question: "Te sens-tu stressé souvent ?",
    answers: [
      "Oui, tout le temps",
      "Parfois",
      "Rarement",
      "Jamais"
    ]
  }
];

let currentQuestion = 0;

// Afficher une question
function showQuestion(index) {

  const q = questions[index];

  // changer le titre
  title.textContent = q.question;

  // changer les réponses
  answerButtons.forEach((button, i) => {
    button.textContent = q.answers[i];
  });

  // changer la couleur des cercles
  circleButtons.forEach((circle, i) => {
    if (i === index) {
      circle.style.backgroundColor = "blue";
    } else {
      circle.style.backgroundColor = "gray";
    }
  });
}

// Bouton Next
nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    title.textContent = "Quiz terminé 🎉";
    document.querySelector(".question").style.display = "none";
    nextBtn.style.display = "none";
  }

});

// Initialisation
showQuestion(currentQuestion);
