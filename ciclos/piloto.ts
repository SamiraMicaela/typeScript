//en una prueba, el piloto tiene que completar 4 vueltas. Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta. El programa debe retornar el tiempo total y el tiempo promedio de vuelta

import * as rls from "readline-sync"

const lap1: number = rls.questionInt ("ingrese tiempo de la 1ra vuelta")
const lap2: number = rls.questionInt ("Ingrese tiempo de la 2da vuelta");
const lap3: number = rls.questionInt ("Ingrese tiempo de la 3ra vuelta");
const lap4: number = rls.questionInt ("ingrese tiempo de la 4ta vuelta");

const totalTime: number =lap1 + lap2 + lap3 + lap4;
const media: number = totalTime /4;
console.log("el tiempo totales de ", totalTime);
console.log("el promedio de vuelta es", media);
