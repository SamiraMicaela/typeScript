import * as rls from "readline-sync" 

let nroDeseado : number = rls.questionInt("Escriba el numero que desea verificar si es mayor o no a 18");

if (nroDeseado > 18){
console.log('El numero es mayor a 18:' + nroDeseado);
    } else {
console.log ("El numero es menor o igual a 18" + nroDeseado);
        }