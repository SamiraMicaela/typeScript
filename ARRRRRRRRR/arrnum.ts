import* as rls from "readline-sync";

let num : number [] = [7];
//console.log ("Los valos del arreglo num son", num.join (", ")); //Utilixzamos el metodo "join" para unir los elementos del arreglo en una cadena separada por comas y se muestre una cadena en la consola.
let indice : number = 0;
num [0] = 20;
num [1] = 14;
num [2] = 8;
num [3] = 0;
num [4] = 5;
num [5] = 19;
num [6] = 24;
while (indice <7){
    console.log ("El numero en la posicion ", indice,"es ", num[indice])
    indice++
}