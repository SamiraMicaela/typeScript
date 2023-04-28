//escriba un algoritmo que lea dos numeros por teclado e imprima el resultado de la suma..

import * as rls from "readline-sync";
let num1: number = 0;
let num2: number = 0;


num1 = rls.questionInt("Ingrese el primer número entero:")
num2 = rls.questionInt("Ingrese el segundo número entero:")

console.log("el resultado de la suma es: ", num1 + num2);
