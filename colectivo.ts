import * as rls from "readline-sync";
let llegoElColectivo : string = rls.question ("¿Estas esperando el colectivo?: ");
while(llegoElColectivo == "n"){
    console.log ("sigo esperando al colectivo.");
    llegoElColectivo = rls.question("¿llego el colectivo?: ")
}