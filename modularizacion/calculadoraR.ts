import * as rls from "readline-sync";
let i : number;
let linea : string;

let numero1 : number = rls.questionInt ("Ingrese un numero: ");
let numero2 : number = rls.questionInt ("ingrese un numero: ");
let opcionMenu : number = rls.questionInt ("Ingrese 1 para sumar, 2 para restar, cualquioer otra tecla para salir: ");

linea = "-";
for( i = 0; i <= 40; i++){
    linea = linea + "-";
};
if( opcionMenu == 1){
console.log (linea);
console.log ("El resultado de la suma es: ", numero1 + numero2);
console.log (linea);
} else if (opcionMenu == 2){
    console.log (linea);
    console.log ("El resultado de la resta es: ", numero1 - numero2);
    console.log (linea)
}