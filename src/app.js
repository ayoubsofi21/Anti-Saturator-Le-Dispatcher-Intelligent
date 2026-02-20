import {getTopTaskOptimized} from "./modules/sorter.js"
import { displayTask } from "./modules/ui.js";

let SkippedTasks=[];

export function handleSkip(tasks) {
    const availableTasks = tasks.filter( task => !SkippedTasks.includes(task.id)
);
const nextTask=getTopTaskOptimized(availableTasks)

if (nextTask) {
    SkippedTasks.push(nextTask.id);
    displayTask(nextTask)
} else {
    console.log("Il n'y a plus de tâches disponibles.");
    
    
}
    
}