import * as rls from "readline-sync"; 
let Samira : boolean = true;
let claveSamira : boolean= true;
let user : string = rls.question("ingrese el nombre de usuario: ");
let clave : string= rls.question("ingrese la clave: ");

if (user=="Samira" && clave=="claveSamira"){
console.log("ingresaste los datos correctos");
    } else {
    console.log("usted no a ingresado los datos correctos");
}
