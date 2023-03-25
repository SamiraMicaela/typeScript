import * as rls from "readline-sync";
let n : number = rls.questionInt ("Ingrese un numero: ");

if (n==0){
    console.log("Este numero es 0.");
} else if (n % 2 == 0){
    console.log("Es un numero par.");
}else{
    console.log("Este numero es impar.");
}
