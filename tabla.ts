import * as rls from "readline-sync";
let tabla : number = rls.questionInt ("Que numero queres multiplicar: ");

let mul :number = rls.questionInt ("Hasta que numero queres que se multiplique: ");
let resultado : number = 0;
for (let n = 1; n <= mul; n ++){
    resultado = (n * tabla);
    console.log (" Esta es la tabla del numero:",tabla, "x", n, "=", resultado);
}
