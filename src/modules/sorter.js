export function calculateScore(task) {
  return task.urgency * 0.4 + task.importance * 0.4 - task.effort * 0.2;
}

export function adaptScoreToEnergy(task, energy) {
  let score = calculateScore(task);
  if (energy <= 3 && task.effort >= 4) score -= 2;
  return score;
}

export function getTopTask(tasks, energy) {
  if (!tasks.length) return null;
  return tasks.sort(
    (a, b) => adaptScoreToEnergy(b, energy) - adaptScoreToEnergy(a, energy),
  )[0];
}
