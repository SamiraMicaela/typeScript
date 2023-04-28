function cantidadDeDivisores(num: number): number {  //esta funcion recibe el parametro de "num" que es el numero del cual se quiere saber la cantidad de divisores.
    let cantidad = 0;  // se inicializa la variable "cantidad" con valor 0 que se utiliza para contar los divisores.

    for (let i = 1; i <= num; i++){ // despues usamos for para itirar desde i hasta num
        if (esMultiplo(num, i)){  // y en cada iteracion se llama la funcion esMultiplo para verificar si "num" es divisible por el num actual del bucle
            cantidad++;    //y se incrementa la variable cantidad
        }
    }
    return cantidad;    //la funcion devuelve la variable cantidad que contiene la cantidad de divisores de num
}