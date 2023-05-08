//construya un algoritmo que sume todos los elementos de un
//arreglo de tamaño N.
//La dimension del arreglo es ingresada por el user.
//Los elementos (numeros) del arreglo son ingresados por el user.
import *as rls from "readline-sync";
let dimensionArreglo : number =  rls.questionInt ("Ingrese la dimension del arreglo: ");
let arreglo : number [] = new Array (dimensionArreglo);
let indice : number;
let resultado : number = 0;

for (indice = 0; indice<dimensionArreglo; indice++){
    arreglo[indice]= rls.questionInt (`indique el numero que va en la posicion ${indice}: `);
    resultado += arreglo[indice];
}
for (indice = 0; indice <dimensionArreglo; indice++){
    console.log (`El numero en posicion ${indice} es: ${arreglo[indice]}: `);
}
console.log (`La suma del arreglo es: ${resultado}`);