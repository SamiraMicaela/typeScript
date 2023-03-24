import * as rls from "readline-sync";
const position : number = rls.questionInt ("ingrese la posicion de llegada");
let message : string = "";

if(position <=0){
    message = ("numero entero por favor, esto que me queres decir no existe");
} switch (position){
    case 1: message = ("Medalla de oro");
    break;
    case 2: message = ("Medalla de plata");
    break;
    case 3: message = ("Medalla de bronce");
    break;
    default: message = ("Certificado de participacion");
}
console.log (message)
