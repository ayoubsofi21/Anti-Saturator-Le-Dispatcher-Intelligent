export function calculateScore(task) {
  // Calculate a weighted score for each task based on urgency, importance, and effort
  return task.urgency * 0.4 + task.importance * 0.4 - task.effort * 0.2;
}
export function adaptScoreToEnergy(task, energy) {
  let score = calculateScore(task);
  if (energy <= 3 && task.effort >= 4) score -= 2; // Penalize high-effort tasks when energy is low
  return score;
}

export function renderTopTask(task) {
  const container = document.getElementById("task-display-container");

  // If there is no task, display a message
  if (!task) {
    container.innerHTML = "<p>Aucune tâche disponible</p>";
    return;
  }

  // Render the task in the container
  container.innerHTML = `
    <div class="task-card">
      <h3>${task.title}</h3>
      <p>Urgence: ${task.urgency} | Importance: ${task.importance} | Effort: ${task.effort}</p>
      <button id="pass-task" data-id="${task.id}">Passer</button>
    </div>
  `;
}
export function getTopTask(tasks, energy) {
  console.log("Tasks before sorting:", tasks); // Log tasks before sorting
  const topTask = tasks.sort(
    (a, b) => adaptScoreToEnergy(b, energy) - adaptScoreToEnergy(a, energy),
  )[0];
  console.log("Top task after sorting:", topTask); // Log the top task
  return topTask;
}
