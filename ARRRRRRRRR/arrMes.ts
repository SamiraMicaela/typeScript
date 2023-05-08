import * as rls from "readline-sync";
let mes : number = rls.questionInt ("Ingrese el mes del 1-12: ");

//switch (mes){
//    case 1: console.log ("El mes de enero")
//    case 2:console.log ("El mes de febrero")
//    case 3:console.log ("El mes de marzo")
//    case 4:console.log ("El mes de abril")
//    case 5:console.log("Ele mes de mayo")
//    case 6:console.log("El mes de junio")
//    case 7:console.log("El mes de julio")
//    case 8:console.log("El mes de agosto")
//    case 9:console.log ("El mes de septiempbre")
//    case 10:console.log("El mes de octubre")
//    case 11:console.log("El mes de noviembre")
//    case 12:console.log("El mes de diciembre")
//}


let meses : string [] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Novienbre", "Diciembre"] //Aca definimos un arreglo llamado meses, que contiene los nombre de los meses.

if (mes >= 1 && mes <= 12){
    console.log (meses [mes - 1]);
}else{
    console.log ("El numero de mes ingresado no es valido.");
}