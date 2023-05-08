//Ejercicios de operadores logicos (IF, ELSE)

import * as rls from "readline-sync"

let edadUsuario : number = rls.questionInt("Indique la edad del usuario");

//console.log("La edad del usuario es: ", edadUsuario)

if (edadUsuario >= 18) {
console.log("El usuario es mayor de edad")
    } else {
    console.log("El usuario es menor de edad")
}