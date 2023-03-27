//Desarrollar un algoritmo que dada una compra: precio unitario, cantidad y el mes indicado por el usuario, determine si el cliente tiene descuento o no.

import * as rls from "readline-sync";

let octubre: boolean = true;
let cantidadProducto1: number = rls.questionInt ("Ingrese la cantidad de productos comprados: ");
let cantidadProducto2: number = rls.questionInt ("Ingrese la cantidad de productos comprados: ");

let mes: string = rls.question ("Ingrese el mes de la compra: ");

let precioProducto1: number = 5000;
let precioProducto2: number = 8000;

let precioFinal: number = 0;
let valorDescuento: number = 15;
let subTotal: number = 0;

subTotal = (cantidadProducto1 * precioProducto1) + (cantidadProducto2 * precioProducto2);
