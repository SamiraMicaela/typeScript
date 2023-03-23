"use strict";
//en una prueba, el piloto tiene que completar 4 vueltas. Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta. El programa debe retornar el tiempo total y el tiempo promedio de vuelta
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var lap1 = rls.questionInt("ingrese tiempo de la 1ra vuelta");
var lap2 = rls.questionInt("Ingrese tiempo de la 2da vuelta");
var lap3 = rls.questionInt("Ingrese tiempo de la 3ra vuelta");
var lap4 = rls.questionInt("ingrese tiempo de la 4ta vuelta");
var totalTime = lap1 + lap2 + lap3 + lap4;
var media = totalTime / 4;
console.log("el tiempo totales de ", totalTime);
console.log("el promedio de vuelta es", media);
