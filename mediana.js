function calcularMediana (lista) {
    lista.sort(function(a, b) {
        return b - a;
    });
  
  
    const mitadLista = parseInt(lista.length / 2);
  
    let mediana;
  
  
      if (esPar(lista.length)) {
          const elemento1 = lista[mitadLista - 1];
          const elemento2 = lista[mitadLista];
  
          const promedioElemeneto1y2 = calcularMediaAritmetica([
              elemento1,
              elemento2,
          ])
  
  
          mediana = promedioElemeneto1y2;
  
          return mediana;
      } else {
          mediana = lista[mitadLista];
  
          return mediana;
      }
  }
  
  
  function esPar(numerito) {
      if (numerito % 2 === 0) {
          return true;
      } else {
          return false;
      }
  }
  
  function calcularMediaAritmetica(lista) {
      const sumaLista = lista.reduce(
          function (valorAcumulado = 0, nuevoElemento) {
              return valorAcumulado + nuevoElemento;
          }
      );
  
      const promedioLista = sumaLista / lista.length;
  
      return promedioLista;
  }