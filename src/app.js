import { renderQuiz, getEnergyScore } from "./modules/quiz.js";
import { renderTaskForm, renderTopTask, clearTopTask } from "./modules/ui.js";
import { addTask, getTasks } from "./modules/storage.js";
import { validateTask } from "./modules/validator.js";
import { getTopTask } from "./modules/sorter.js";

let energy = 5;

// Function to display the top task
function displayTopTask() {
  const allTasks = getTasks(); // Retrieve all tasks from localStorage
  const topTask = getTopTask(allTasks, energy); // Get the top task based on priority
  clearTopTask(); // Clear the current task
  renderTopTask(topTask); // Render the top task
}

function initApp() {
  renderQuiz(); // Render the quiz first
  renderTaskForm(); // Render task form after quiz is completed

  // Quiz submit event
  document.getElementById("quiz-container").addEventListener("submit", (e) => {
    e.preventDefault();
    energy = getEnergyScore(); // Get energy score from the quiz
    displayTopTask(); // Display the top task after quiz completion
  });

  // Task form submission event
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
        addTask(task); // Add task to localStorage
        displayTopTask(); // Re-render the top task after adding the new one
        form.reset(); // Reset the form after submission
      } else {
        alert("Tâche invalide ou valeurs incorrectes !");
      }
    });

  // Pass task button functionality
  document.addEventListener("click", (e) => {
    if (e.target.id === "pass-task") {
      const taskId = parseInt(e.target.dataset.id); // Get task ID from the button
      const allTasks = getTasks().filter((t) => t.id !== taskId); // Remove passed task from tasks array

      // Update localStorage with the new tasks list
      localStorage.setItem("tasks", JSON.stringify(allTasks));

      // Clear the current task display
      clearTopTask();

      // Render the next top task
      const nextTopTask = getTopTask(allTasks, energy); // Get the next top task from the updated list
      renderTopTask(nextTopTask);
    }
  });
}

initApp();
