import * as rls from "readline-sync"; 

const unDado : number = 1 / 6 ;
console.log (`La probabilidad de sacar 6 con un dados es de ${unDado}`);

let probabilidadesDosDados : number = unDado ** 2;
console.log(`La probabilidad de sacar doble 6 con dos dados es de ${probabilidadesDosDados}`);

let n: number= rls.questionInt ("Ingrese cuantos dados quiere tirar:") ;
let probabilidadMasDados: number = unDado ** n;
console.log(`la probabilidad de sacar 6 con ${n} dados, es: ${probabilidadMasDados}`);
