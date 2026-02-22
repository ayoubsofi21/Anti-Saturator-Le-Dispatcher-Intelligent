const TASK_KEY = "tasks";

export function getTasks() {
  return JSON.parse(localStorage.getItem(TASK_KEY)) || [];
}

export function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

export function updateTask(id, data) {
  const tasks = getTasks().map((t) => (t.id === id ? { ...t, ...data } : t));
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

export function deleteTask(id) {
  const tasks = getTasks().filter((t) => t.id !== id);
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}
