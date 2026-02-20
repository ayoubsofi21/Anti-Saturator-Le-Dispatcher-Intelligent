// Sélection des éléments
const title = document.querySelector("h1");
const answerButtons = document.querySelectorAll(".question button");
const nextBtn = document.querySelector(".btn");
const circleButtons = document.querySelectorAll(".bouton-cercle");
// Création du message d'erreur
const message = document.createElement("p");
message.style.color = "red";
message.style.textAlign = "center";
message.style.marginTop = "10px";
document.querySelector(".question").appendChild(message);

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
let selectedAnswer = null;

// Fonction pour afficher une question
 export const showQuestion=(index) => {

  const q = questions[index];

  // changer le titre
  title.textContent = q.question;

  // changer les réponses
  answerButtons.forEach((button, i) => {
    button.textContent = q.answers[i];
    button.style.backgroundColor = ""; // reset couleur
  });

  // reset sélection
  selectedAnswer = null;

  // supprimer message erreur
  message.textContent = "";

  // changer couleur des cercles
  circleButtons.forEach((circle, i) => {
    circle.style.backgroundColor = i === index ? "blue" : "gray";
  });
}

// Sélection d'une réponse
answerButtons.forEach((button) => {
  button.addEventListener("click", () => {

    selectedAnswer = button.textContent;

    // effet visuel
    answerButtons.forEach(btn => btn.style.backgroundColor = "");
    button.style.backgroundColor = "Hotpink";

    // enlever message erreur
    message.textContent = "";
  });
});

// Bouton Next
nextBtn.addEventListener("click", () => {

  if (selectedAnswer === null) {
    message.textContent = " Veuillez choisir une réponse avant de continuer.";
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    document.querySelector(".question").style.display = "none";
    nextBtn.textContent = "Quiz terminé 🎉";
    message.textContent = "";
  }

});

// Initialisation
showQuestion(currentQuestion);

