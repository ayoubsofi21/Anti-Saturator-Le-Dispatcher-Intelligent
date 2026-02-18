export function calculateScore(task) {
  const score = task.urgency * 0.4 + task.importance * 0.4 - task.effort * 0.2;
  return score;
}
export function adaptScoreToEnergy(task, energy) {
  let score = calculateScore(task);
  if (energy <= 3 && task.effort >= 4) {
    score -= 2;
  }
  if (energy >= 7 && task.effort >= 4) {
    score += 1;
  }
  return score;
}
