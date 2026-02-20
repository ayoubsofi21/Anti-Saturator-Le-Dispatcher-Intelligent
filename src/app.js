import {
  calculateScore,
  adaptScoreToEnergy,
  sortTasks,
} from "./modules/sorter.js";
const tasks = [
  { id: 1, title: "Task A", urgency: 5, importance: 5, effort: 2 },
  { id: 2, title: "Task B", urgency: 3, importance: 4, effort: 1 },
  { id: 3, title: "Task C", urgency: 4, importance: 4, effort: 2 },
  { id: 4, title: "Big Project", urgency: 5, importance: 5, effort: 5 },
];
tasks.forEach((task) => {
  console.log(`Score(${task.title})`, calculateScore(task));
  console.log(task.title, adaptScoreToEnergy(task, 2));
});
console.table(sortTasks(tasks, 5));
import { getTasks } from "./storage.js";
import {headerfunc,formulair, button,supprimer} from "./src/moules/ui.js";
const main = document.querySelector(".main");

main.innerHTML = `
${headerfunc()}
${formulair()}
${button()}
${supprimer()}

`

const tasks = getTasks();
console.log(tasks);
