"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nroDeseado = rls.questionInt("Escriba el numero que desea verificar si es mayor o no a 18");
if (nroDeseado > 18) {
    console.log('El numero es mayor a 18:' + nroDeseado);
}
else {
    console.log("El numero es menor o igual a 18" + nroDeseado);
}
