import * as rls from "readline-sync"
let alturaPersona : number = rls.questionInt ("Indique su altura por favor")
if (alturaPersona >130) {
    console.log ("La persona puede subir a la montaña rusa")
} else {
    console.log ("La persona no podra subir a esta montaña rusa, no cumple con los requisitos")
}
