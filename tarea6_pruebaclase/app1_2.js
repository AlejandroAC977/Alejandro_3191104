numero = parseInt(prompt("Ingrese la cantidad de x"));
cadena = " ";
cadena2 = " ";

function vert(numero){
    for(let i = 0; i <= numero; i++){   
        cadena += "x";
    }
    console.log(cadena);

}

function hori(numero){
    for(let i = 0; i <= numero; i++){   
        cadena2 += "x\n";
    }
    console.log(cadena2);

}

hori(numero);
vert(numero);