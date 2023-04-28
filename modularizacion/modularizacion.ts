import * as rls from "readline-sync";
let i : number, linea :string
let num1 : number = rls.questionInt ("Ingrese un numero: ");
let num2 : number = rls.questionInt ("Ingrese un numero: ");
let opcionMenu : number = rls.questionInt ("Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir.");

if(opcionMenu == 1){
     linea = "";
};
for (i = 0; i <= 40; i ++){
    linea = linea + "-";
};
if (opcionMenu == 1){
    console.log (linea);
    console.log()
}