import * as rls from "readline-sync"
const base:number = rls.questionInt("Ingrese la base:" ) 
const altura:number = rls.questionInt("Ingrese la altura")

let area:number = base * altura;
console.log("el area es: ", area)
