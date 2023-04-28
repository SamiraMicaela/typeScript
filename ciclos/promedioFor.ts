import * as rls from "readline-sync";
let nota, suma, promedio, contador : number 
suma= 0;
for (let contador =1; contador <=10; contador++){
   nota= rls.questionInt ("Ingrese la nota" + contador+":"); 
   suma +=nota;
}
promedio= suma/10
console.log ("El promedio de las notas es: "+ promedio);
