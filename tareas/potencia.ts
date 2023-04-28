import * as rls from "readline-sync";
function calcularPotencia (base: number , exponente : number): number {
    if (exponente == 0){
        return 1;
    }else{
        return base * calcularPotencia (base, exponente - 1);
    }
}
//pedimos al usuario que ingrese la base y el exponente.
const base: number = rls.questionInt ("Ingrese la base: ");
const exponente : number = rls.questionInt ("Ingrese el exponente: ");
//verifiquemos que el exponente sea mayo o igual a 0
if (exponente <0 ){
    console.log ("Error: el exponente debe ser mayor a 0")
}else{
    //calculamos la potencia y la imprimimos en la pantalla.
    const potencia: number = calcularPotencia (base, exponente);
    console.log (`${base} elevado a la ${exponente} es igual a ${potencia}`);
}
