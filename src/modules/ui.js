import { validateTask } from "./validator.js";
import { addTask } from "./storage.js";
import { getTasks } from "./storage.js";
// import { renderTopTask } from "./ui.js";

// Function to render the task form
export function renderTaskForm() {
  const container = document.getElementById("task-form-container");
  container.innerHTML = `
    <form id="task-form">
      <label for="title">Titre :</label>
      <input name="title" id="title" placeholder="Entrez votre tâche ......" required>

      <label for="urgency">Urgence :</label>
      <input type="range" name="urgency" min="1" max="5" value="5" id="urgency">
      <p>Urgence : <span id="urgency-value">5</span></p>

      <label for="importance">Importance :</label>
      <input type="range" name="importance" min="1" max="5" value="5" id="importance">
      <p>Importance : <span id="importance-value">5</span></p>

      <label for="effort">Effort :</label>
      <input type="range" name="effort" min="1" max="5" value="5" id="effort">
      <p>Effort : <span id="effort-value">5</span></p>

      <button type="submit">Ajouter tâche</button>
    </form>
  `;

  // Display selected values for the sliders
  const urgencySlider = document.getElementById("urgency");
  const importanceSlider = document.getElementById("importance");
  const effortSlider = document.getElementById("effort");

  const urgencyValue = document.getElementById("urgency-value");
  const importanceValue = document.getElementById("importance-value");
  const effortValue = document.getElementById("effort-value");

  urgencySlider.addEventListener("input", () => {
    urgencyValue.textContent = urgencySlider.value;
  });

  importanceSlider.addEventListener("input", () => {
    importanceValue.textContent = importanceSlider.value;
  });

  effortSlider.addEventListener("input", () => {
    effortValue.textContent = effortSlider.value;
  });

  // Handle form submission to add a new task
  document.getElementById("task-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const urgency = parseInt(urgencySlider.value);
    const importance = parseInt(importanceSlider.value);
    const effort = parseInt(effortSlider.value);

    // Create a new task object
    const newTask = {
      id: Date.now(), // unique task ID
      title,
      urgency,
      importance,
      effort,
    };

    if (validateTask(newTask)) {
      addTask(newTask); // Add task to localStorage
      alert("Tâche ajoutée avec succès!");

      // Re-render tasks after adding new task
      renderTopTask(getTopTask(getTasks(), energyScore)); // Render the best task (or renderAllTasks to display all tasks)
      e.target.reset(); // Reset form after submission
    } else {
      alert(
        "Tâche invalide. Assurez-vous que tous les champs sont remplis correctement.",
      );
    }
  });
}
export function clearTopTask() {
  const container = document.getElementById("task-display-container");
  container.innerHTML = ""; // Clear the task container
}

export function renderTopTask(task) {
  const container = document.getElementById("task-display-container");

  if (!task) {
    container.innerHTML = "<p>Aucune tâche disponible</p>";
    return;
  }

  container.innerHTML = `
    <div class="task-card">
      <h3>${task.title}</h3>
      <p>Urgence: ${task.urgency} | Importance: ${task.importance} | Effort: ${task.effort}</p>
      <button id="pass-task" data-id="${task.id}">Passer</button>
    </div>
  `;
}
