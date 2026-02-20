// src/app.js
import { getTasks } from "./modules/storage.js"; 
import { headerfunc, formulair} from "./modules/ui.js"; 
import { initFormLogic } from "./modules/formular.js";

const main = document.querySelector(".main");

if (main) {
    
    main.innerHTML = `
        ${headerfunc()}
        ${formulair()}       
        `;


    initFormLogic();
}