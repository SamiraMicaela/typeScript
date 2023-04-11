import * as rls from "readline-sync";
while (true){          //Aca explico lo que hice: Este es un ciclo while, que se va a ejecutar solo si se cumple la condicion true.
const nombreDeAlumno : string = rls.question ("Ingrese el nombre del alumno (O cadena vacia para salir): ");
    if (nombreDeAlumno === ""){  //Solicitamos el nombre del alumno, que se guarda en la variable nombre, que es de tipo string. 
                                 //La cadena entre parentesis es lo que se va a mostrar en el cuadro de dialogo.
                                 //Esta condicion evalua si el valor de "nombreDeALumno" es una cadena vacia.
    break;//como este nunca cambia, este ciclo se ejecuta de forma indefinida hasta que se interrumpa con un break.
    }                            
    const notaPractica: number = rls.questionInt ("Ingrese la nota de la parte practica, (entre 0 y 10): ");
        if (notaPractica < 0 || notaPractica > 10){  //Esta condicion nos muestra si es mayor a 10 o menor a 0.
        console.log ("La nota de la parte practica debe estar entre 0 y 10."); //Si no se cumple esta condicion, mostrara el mensaje de error.
         continue;                //Este "continue" lo que hace es saltar a la proxima iteracion del ciclo while.
        }
    const notaProblemas : number = rls.questionInt ("Ingrese la nota de la parte problemas, (entre 0 y 10): ");
        if (notaProblemas < 0 || notaProblemas > 10){
        console.log ("La nota de la parte de problemas debe estar entre 0 y 10.");
        continue;
        }
    const notaTeoria : number = rls.questionInt ("Ingrese de la parte teorica, (entre 0 y 10): ");
        if (notaTeoria < 0 || notaTeoria > 10){
        console.log ("La nota de la parte teorica debe estar entre 0 y 10");
        continue;
        }
    let notaFinal : number = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4;
    console.log (`la nota final de  ${nombreDeAlumno} es:  ${notaFinal}`);
}
