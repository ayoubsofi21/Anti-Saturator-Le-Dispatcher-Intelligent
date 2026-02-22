import { renderQuiz, getEnergyScore } from "./modules/quiz.js";
import { renderTaskForm, renderTopTask, clearTopTask } from "./modules/ui.js";
import { addTask, getTasks } from "./modules/storage.js";
import { validateTask } from "./modules/validator.js";
import { getTopTask } from "./modules/sorter.js";
import { tasks as mockTasks } from "./data/mockTasks.js";

let energy = 5;

function displayTopTask() {
  const allTasks = getTasks().length ? getTasks() : mockTasks;
  const topTask = getTopTask(allTasks, energy);
  clearTopTask();
  renderTopTask(topTask);
}

function initApp() {
  renderQuiz(); // Show the quiz first
  renderTaskForm(); // Render task form after quiz is completed

  // Quiz submit
  document.getElementById("quiz-container").addEventListener("submit", (e) => {
    e.preventDefault();
    energy = getEnergyScore(); // Get energy score from the quiz
    displayTopTask();
  });

  // Task form submit
  document
    .getElementById("task-form-container")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const task = {
        id: Date.now(),
        title: form.title.value,
        urgency: parseInt(form.urgency.value),
        importance: parseInt(form.importance.value),
        effort: parseInt(form.effort.value),
      };
      if (validateTask(task)) {
        addTask(task);
        displayTopTask();
        form.reset();
      } else {
        alert("Titre invalide ou valeurs incorrectes !");
      }
    });

  // Pass task button
  document.addEventListener("click", (e) => {
    if (e.target.id === "pass-task") {
      const allTasks = getTasks().filter(
        (t) => t.id !== parseInt(e.target.dataset.id),
      );
      clearTopTask();
      renderTopTask(getTopTask(allTasks, energy));
    }
  });
}

initApp();
