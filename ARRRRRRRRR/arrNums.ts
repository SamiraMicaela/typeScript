//Almacene en un arreglo de dimendion N números (la cantidad)
//es ingresada por el usuario)
//muestre cuantos números son positivos, cuantos son negativos
//y cuantos ceros hay.
// ejemplo: v= o, -7, -9, 1, 0, 0
// la salida es: 1 positivo, 2 negativos y 3 ceros.
import * as rls from "readline-sync";
let n : number = rls.questionInt ("Ingrese la cantidad de números a almacenar: ");

let arr : number [] = []
let positivos : number = 0;
let negativos : number = 0;
let ceros : number = 0;

for (let i = 0; i < n; i++){
    arr.push(rls.questionInt (`Ingrese el número ${i + 1}: `)); //ARR.PUSH es un metodo de los arreglos que se utiliza para agregar elementos al final del arreglo. 
}                                                               //EJ: si el usuario ingresa 3 numeros: -2,8,0. entonces el arreglo arr contiene   
for (let i = 0; i <arr.length; i++){                            //  [-2, 8, 0 ].  
    if (arr[i] > 0){
        positivos++;
    }else if (arr[i] < 0){
        negativos++;
    }else {
        ceros++;
    }
}
console.log (`${positivos} positivos, ${negativos} negativos y ${ceros} ceros.`)