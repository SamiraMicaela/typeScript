import * as rls from "readline-sync"
const n1 : number = rls.questionFloat("ingrese un numero: ");
const n2 : number = rls.questionFloat("ingrese un numero: ");
const n3 : number = rls.questionFloat("ingrese un numero: ");
if (n1>=n2 && n1>=n3){
console.log("el numero mayor es:", n1);
        } else if (n2>=n1 && n2>=n3){
        console.log("el numero mayor es:", n2);
            } else if (n3>=n1 && n3>=n2){
        console.log("el numero mayor es:", n3);
                } else if (n1===n2 && n1===n3){
        console.log("el numero mayor es:", n1);
                    } 
    
 
