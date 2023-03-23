"use strict";
//escriba un algoritmo que lea dos numeros por teclado e imprima el resultado de la suma..
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = 0;
var num2 = 0;
num1 = rls.questionInt("Ingrese el primer número entero:");
num2 = rls.questionInt("Ingrese el segundo número entero:");
console.log("el resultado de la suma es: ", num1 + num2);
