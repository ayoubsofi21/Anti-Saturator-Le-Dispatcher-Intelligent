import { calculateScore, adaptScoreToEnergy } from "./modules/sorter.js";

// const tasks = [
//   { id: 1, title: "Tâche A", urgency: 5, importance: 5, effort: 2 },
//   { id: 2, title: "Tâche B", urgency: 3, importance: 4, effort: 1 },
//   { id: 3, title: "Tâche C", urgency: 4, importance: 4, effort: 2 },
// ];
// tasks.forEach((task) => {
//   console.log(task.title + "(Score): " + calculateScore(task));
// });
const hardTask = {
  id: 2,
  title: "Big Project",
  urgency: 5,
  importance: 5,
  effort: 5,
};
// tasks.forEach((task) => {
//   console.log(task.title + "(Score): " + calculateScore(task));
// });
// console.log("(Score): " + calculateScore(hardTask));
console.log("Low energy:", adaptScoreToEnergy(hardTask, 4));
