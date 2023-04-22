import * as rls from "readline-sync";

function calcularAreaTriangulo (base: number,altura: number) : number{
    const area = (base * altura) / 2;
    return area  
}
const paresBaseAltura : [ number, number][ ] = [  //esta es una variable que contiene los pares de base, altura.
    [1,2 ],
    [2,4 ],
    [3,6 ],
    [4,8 ],
    [5,10 ],
    [6,12 ],
    [7,14 ],
];

const areas = paresBaseAltura.map(([base, altura]) => calcularAreaTriangulo(base,altura)); // esta variable se calcula utilizando la funcion map, para aplicar la funcion "cAT".
areas.forEach((area, index) => {                 //forEach recorre la lista de areas y los pares de base-altura, donde imprime los resultados.
    const base: number = rls.questionInt ("Ingrese la base: ");
const altura : number = rls.questionInt ("Ingrese la altura: ");
console.log(`Para una base de ${base} y una altura de ${altura} el area del triangulo es ${area}`)
});


