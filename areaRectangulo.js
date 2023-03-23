"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese la base:");
var altura = rls.questionInt("Ingrese la altura");
var area = base * altura;
console.log("el area es: ", area);
