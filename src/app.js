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
