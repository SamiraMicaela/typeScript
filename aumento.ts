import * as rls from "readline-sync";

let sueldo : number = rls.questionInt ("¿Cual es su sueldo actual?: $")
let aumento : number= 0;

if (sueldo <15000) {
    console.log ("aumento del sueldo ", sueldo * 1.20);
} 