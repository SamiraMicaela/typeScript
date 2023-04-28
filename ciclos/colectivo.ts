import * as rls from "readline-sync";
let llegoElColectivo : string = rls.question ("¿Estas esperando el colectivo?: ");

while(llegoElColectivo == "N"){
    console.log ("sigo esperando al colectivo.");
    llegoElColectivo = rls.question("¿llego el colectivo?: ")
    } if (llegoElColectivo == "S"){
console.log ("llego el colectivo");
        } else {
    console.log ("ingrese una respuesta valida, por favor.");
    llegoElColectivo = rls.question ("Cual es tu respuesta?: ");
            }
