"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//implemente un algoritno que muestre en pantalla el precio final de un prodcto despues de aplicarle un descuento
var rls = require("readline-sync");
var precio = rls.questionFloat("Ingrese precio del producto");
var porcentajeDescuento = 0.1;
var descuento = precio * porcentajeDescuento;
var precioConDescuento = precio - descuento;
console.log("el precio con descuento es:", precioConDescuento);
