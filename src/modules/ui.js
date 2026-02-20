// src/modules/ui.js
export const headerfunc = () => `<header class="app-header">Anti-Saturator</header>`;

export const formulair = () => {
    return `
    <div class="div">
        <h1>Ajouter Une Tache</h1>
        <label>Titre :</label>
        <input    class = "input"    type="text" placeholder="Entrer votre Tache ....." id="task-title" />
           
        <label>Urgence :</label>
        <input  class = "input"  type="range" min="1" max="5" value="5"       oninput="
                            this.nextElementSibling.textContent = this.value
                        " id="task-urgence" />
             <span>5</span>
        <label>Importance :</label>
        <input      class = "input"  type="range" min="1" max="5" value="5"      oninput="
                            this.nextElementSibling.textContent = this.value
                        "id="task-importance" />
             <span>5</span>
        <label>Effort :</label>
        <input    class = "input"  type="range" min="1" max="5" value="5"     oninput="
                            this.nextElementSibling.textContent = this.value
                        " id="task-effort" />
             <span>5</span>
        ${button}
        <div id="task-list" class="task-list-container"></div>
    </div>
    `;
}

export const button=`<div class='cententbtn' ><button id="add-btn">Ajouter</button></div>`; 