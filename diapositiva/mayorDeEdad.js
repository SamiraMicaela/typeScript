"use strict";
//Ejercicios de operadores logicos (IF, ELSE)
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var edadUsuario = rls.questionInt("Indique la edad del usuario");
//console.log("La edad del usuario es: ", edadUsuario)
if (edadUsuario >= 18) {
    console.log("El usuario es mayor de edad");
}
else {
    console.log("El usuario es menor de edad");
}
