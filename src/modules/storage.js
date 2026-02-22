const TASK_KEY = "tasks";

export function getTasks() {
  const tasks = JSON.parse(localStorage.getItem(TASK_KEY)) || [];
  console.log("Retrieved tasks from localStorage:", tasks); // Debugging
  return tasks;
}

export function addTask(task) {
  const tasks = getTasks();
  console.log("Before adding task:", tasks); // Log before adding
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("After adding task:", tasks); // Log after adding
}

// export function updateTask(id, data) {
//   const tasks = getTasks().map((t) => (t.id === id ? { ...t, ...data } : t));
//   localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
// }

// export function deleteTask(id) {
//   const tasks = getTasks().filter((t) => t.id !== id);
//   localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
// }
