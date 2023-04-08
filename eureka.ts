import * as rls from "readline-sync"

const user : string = ("micaelabava@hotmail.com")
const pasword : string = ("eureka");
let usuario: string = rls.question ("Ingrese el usuario: ");
let contraseña : string = rls.question ("Ingrese la clave: ");
 let intentosClave = 0;  
  
    for ( intentosClave = 1; intentosClave <=3; intentosClave +1){
        if (user == usuario && pasword== contraseña){
    console.log ("Usted ingreso correctamente.")
        } else { 
        console.log(" Se ha bloqueado la cuenta.")
            } break
    
    } 