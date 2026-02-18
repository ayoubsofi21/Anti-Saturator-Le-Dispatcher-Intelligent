export function calculateScore(task) {
  const score = task.urgency * 0.4 + task.importance * 0.4 - task.effort * 0.2;

  return score;
}
