import * as rls from "readline-sync"
let precioFinal : number =0;
let precioProductoUno: number =200;
let precioProductoDos: number = 350;

let cantidadDelProductoUno : number = rls.questionInt ("Cantidad de producto 1 que compro el usuario");
let cantidadDelProductoDos : number = rls.questionInt ("Cantidad de producto 2 que compro el usuario");

let subTotal : number = 0;
let valorDescuento : number = 0;
subTotal = (cantidadDelProductoUno * precioProductoUno) + (cantidadDelProductoDos * precioProductoDos);

console.log("cantidad del producto 1:", cantidadDelProductoUno, " \ncantidad de producto 2:", cantidadDelProductoDos,"\nsubtotal:" , subTotal );

if (subTotal >1000){
valorDescuento = subTotal * 0.1;
precioFinal = (subTotal - valorDescuento);
console.log("uds ahorra: $", valorDescuento, "por haber comprado mas de $1000 \nel precio final es de:", precioFinal);
} else{
    precioFinal = subTotal;
    console.log ("gracias por confiar en nosotros. \nel precio final es de :$", precioFinal);
    }
