export function validateTask(task) {
  const regex = /^[a-zA-Z0-9\s]{5,50}$/;
  if (!regex.test(task.title)) return false;
  if (![1, 2, 3, 4, 5].includes(task.urgency)) return false;
  if (![1, 2, 3, 4, 5].includes(task.importance)) return false;
  if (![1, 2, 3, 4, 5].includes(task.effort)) return false;
  return true;
}
