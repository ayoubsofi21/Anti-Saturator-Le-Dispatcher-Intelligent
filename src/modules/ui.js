export const headerfunc = () => {
    return ` <header>Anti-Saturator</header>`
}
export const formulair = () => {
    return `<div class="div">
         <h1>Ajouter Une Tache</h1>
        <label>Titre :</label>
        <input type="text" placeholder="Entrer votre Tache ....." class="input" id="task-title" />

        <label class="label">Urgence : </label>
        <input type="range" min="1" max="5" value="5" oninput="
                            this.nextElementSibling.textContent = this.value
                        " id="task-urgence" />

        <span>5</span>
        <label class="label">Importance : </label>
        <input type="range" min="1" max="5" value="5" oninput="
                            this.nextElementSibling.textContent = this.value
                        " id="task-importance" />

        <span>5</span>
        <label class="label">Effort : </label>
        <input type="range" min="1" max="5" value="5" oninput="
                            this.nextElementSibling.textContent = this.value
                        " id="task-effort" />

        <span>5</span>
    </div>
    `
}
export const button = () => {
    return ` <div class="cententbtn">

        <button id="add-btn">Ajouter</button>
    </div>`
}
export const supprimer = () => {
    return `  <div class="bt">
  
        <button class="bttn">Supprimer</button>
    </div>`
}
