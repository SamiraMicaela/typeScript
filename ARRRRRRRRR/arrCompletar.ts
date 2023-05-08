//Llenar un array de 10 posiciones con numeros aleatorios
//entre 0 y 99.
//Para obtener numeros aleatorios crear una funcion Azar,
//que se base en las funciones disponibles en el paquete
//math: _MATH:RANDOM() devuelve un nro al azar entre el 0y1.
import * as rls from "readline-sync";

let arrCompletar : number [] = new Array (10);
let indice : number;

for (indice = 0; indice <10;indice++){
    arrCompletar[indice] = Azar (100);
}
for (indice = 0; indice<10;indice++){
    console.log (`El numero en la posicion ${indice} es: ${arrCompletar[indice]}`);
}
function Azar (tope: number) : number {
    return Math.floor (Math.random()*tope);
};