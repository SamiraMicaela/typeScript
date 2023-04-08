import *as rls from "readline-sync";
let n : number = rls.questionInt ("ingrese");
let resultado : number = 0;
    for( n = 1; n <= 100; n ++){
        if (n % 2 === 0 || n % 3 === 0){
       n = n + 1 ; 
        }
    resultado = n
    } 
console.log (resultado)