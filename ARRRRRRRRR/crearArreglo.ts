//Crear un arreglo
//Dado un array con nombres de tamaño 5, pedir al usuario
//que ingrese un nombre y verificar si esta el arreglo y si
//esta o no en el.
import *as rls from "readline-sync";
let nombres : string [] = ["Samira, Nehemias, Juan, Margarita, Ramona"];
let nombreBuscado : string = rls.question ("Ingrese un nombre: ");
let encontrado : boolean = false;

for (let i = 0; i < nombreBuscado.length;i++){
    if (nombres[i]=== nombreBuscado){
        encontrado = true
    }
}
if (encontrado){
    console.log (`${nombreBuscado} esta dentro del arreglo.`);
} else {
    console.log (`${nombreBuscado} no esta dentro del arreglo.`);
}
//ANDA MAL!!!!!!!!!!