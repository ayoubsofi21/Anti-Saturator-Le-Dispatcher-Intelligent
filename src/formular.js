const titleInput = document.getElementById("task-title");
const urgencyInput = document.getElementById("task-urgence");
const importanceInput = document.getElementById("task-importance");
const effortInput = document.getElementById("task-effort");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

let tasks = [];

addBtn.addEventListener("click", function () {

    if (titleInput.value.trim() === "") return;

 
    const task = {
        title: titleInput.value,
        urgency: urgencyInput.value,
        importance: importanceInput.value,
        effort: effortInput.value
    };



    tasks.push(task);


    

    displayTasks();
    titleInput.value = "";
});

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach( (elm)=> {

        taskList.innerHTML = 
        `
            <h2 class="h2">${elm.title}</h2>
            <p>Urgence: ${elm.urgency}</p>
            <p>Importance: ${elm.importance}</p>
            <p>Effort: ${elm.effort}</p>
        `;

        
    });
}
