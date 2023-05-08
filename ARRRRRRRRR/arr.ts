// construya un algoritmo que tenga un arreglo de dimension deseada por el usuario y llenelo con los nombres que el usuario desee.
//crear un arreglo de las posiciones que desee el usuario y llenarlo con nombres de personas.
import * as rls from "readline-sync";

let dimensionArr : number = rls.questionInt ("Ingrese la dimension: ");
let  nombrePersonas : string [] = new Array(dimensionArr);
let indice : number;

for (indice = 0; indice <dimensionArr; indice++){
    nombrePersonas [indice] = rls.question (`Ingrese el nombre que quiere en el lugar ${indice}: `);
}
for (indice = 0; indice <dimensionArr; indice++){
    console.log (`El nombre que va en posicion ${indice} es ${nombrePersonas [indice]}`);
}

