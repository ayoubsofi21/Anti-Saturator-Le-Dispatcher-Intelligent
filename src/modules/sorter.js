export function getTopTaskOptimized(tasks){
    if ( tasks.length === 0) return null;

let bestTask = tasks[0];
let bestScore = calculateScore(tasks[i]);

for(let i = 1 ; i < tasks.length; i++){
    const currenteScore = calculateScore(tasks[i]);

    if (currenteScore > bestScore ||
        (currenteScore === bestScore && 
            tasks[i].importance > bestTask.importance)
        ){
            bestTask = tasks[i];
            bestScore = currenteScore;
    }
}
return bestTask;
}

