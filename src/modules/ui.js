// Updated task form with sliders for urgency, importance, and effort
export function renderTaskForm() {
  const container = document.getElementById("task-form-container");
  container.innerHTML = `
    <form id="task-form">
      <label for="title">Titre :</label>
      <input name="title" id="title" placeholder="Entrez votre tâche ......" required>

      <label for="urgency">Urgence :</label>
      <input type="range" name="urgency" min="1" max="10" value="5" id="urgency">
      <p>Urgence : <span id="urgency-value">5</span></p>

      <label for="importance">Importance :</label>
      <input type="range" name="importance" min="1" max="10" value="5" id="importance">
      <p>Importance : <span id="importance-value">5</span></p>

      <label for="effort">Effort :</label>
      <input type="range" name="effort" min="1" max="10" value="5" id="effort">
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

export function clearTopTask() {
  document.getElementById("task-display-container").innerHTML = "";
}
