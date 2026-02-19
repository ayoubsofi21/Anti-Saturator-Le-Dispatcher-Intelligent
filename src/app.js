import { headerFun, btnNumber, btnQuestion, btnNext } from "./modules/ui.js";
import{showQuestion} from"./modules/quiz.js";

const container = document.querySelector(".container");

container.innerHTML = `
    ${headerFun()}
    ${btnNumber()}
    ${btnQuestion()}
    ${btnNext()}
    
`;