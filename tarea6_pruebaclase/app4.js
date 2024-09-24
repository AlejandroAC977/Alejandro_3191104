//Funcion que genere las tablas de mulp del 1 al 10
//numero=parseInt(prompt("Ingresa el numero de tabla: "));
cadena = " ";

/*
function tabla(tabla){
    for (let i=0; i <= 10; i++){
        
    }
    console.log(cadena);   
}*/

function tabla(){
    for(let i = 1; i<=10; i++){
        for(let j = 1; j <= 10; j++){
            res = i * j;
            cadena += i +" * "+ j +" = " + res+"\n"; 
        }

    }
    console.log(cadena); 
}

tabla();