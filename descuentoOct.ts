//Desarrollar un algoritmo que dada una compra: precio unitario, cantidad y el mes indicado por el usuario, determine si el cliente tiene descuento o no.

import * as rls from "readline-sync";

let octubre: boolean = true;
let cantidadProducto1: number = rls.questionInt ("Ingrese la cantidad del p1 comprados: ");
let cantidadProducto2: number = rls.questionInt ("Ingrese la cantidad del p2 comprados: ");

let mes: string = rls.question ("Ingrese el mes de la compra: ");

let precioProducto1: number = 5000;
let precioProducto2: number = 8000;

let precioFinal: number = 0;
let valorDescuento: number = 0;
let subTotal: number = 0;

subTotal = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2);
console.log ("cantidad de producto 1: ",cantidadProducto1 , "\ncantidad de producto 2: ", cantidadProducto2, "\nsubtotal: ", subTotal, "\nmes: ", mes);

if (mes == "octubre"){
valorDescuento = subTotal * 0.15 ;
precioFinal = (subTotal - valorDescuento);
console.log ("Usted tiene un descuento de: $", valorDescuento, "por haber comprado en octubre. \nEl precio final es de: ", precioFinal)
} else {
    precioFinal = subTotal;
    console.log ("gracias por la compra. \nEl precio final es de: $ ", precioFinal)
}