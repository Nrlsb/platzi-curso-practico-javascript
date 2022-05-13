function calcularRangoMedio(lista) {
    
    lista.sort(function(a, b) {
        return a - b;
    });
    

    let elementoA = lista[0];
    let elementoB = lista[lista.length - 1];
    const listaRangoMedio = (elementoA + elementoB) / 2;
    return listaRangoMedio;
}



function rangoMedio () {
    const input = document.getElementById("InputLista");
    const value = parseInt(input.value);

    const resultado = calcularRangoMedio(value);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + resultado;
}