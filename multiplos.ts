import *as rls from "readline-sync";
let n : number = rls.questionInt ("ingrese el numero: ");
let resultado : number = 0;
    if (n % 2 === 0 || n % 3 === 0){
        resultado = n; 
    console.log ( resultado,"Este numero es multiplo de 2 o de 3.");
    } else{
        console.log ("Este numero no es multiplo de 2 y de 3");
    }