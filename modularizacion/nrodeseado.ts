//construyua un alg. que tenga un arreglo de simension 5
//y llenelo con los numeros que el usuario desee.
//muestre los numeros del arreglo al usuario.
import * as rls from "readline-sync";

let nroDeseadoArr : number [] = [5];
let nro : number = 0;
for (let indice = 0; indice <5; indice ++){
    nro = rls.questionInt (`Indique el numero que desea incorporar en la posicion ${indice}: `);
    nroDeseadoArr [indice] = nro;
    
}
for ( let indice = 0; indice <5; indice++){
    console.log (`El numero en la posicion ${indice}, es ${nroDeseadoArr [indice]}`);
}