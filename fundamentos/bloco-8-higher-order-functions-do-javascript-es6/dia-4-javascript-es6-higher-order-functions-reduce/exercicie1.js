/* 1 - Dada uma matriz, transforme em um array. */
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(array) {
    // escreva seu código aqui
    const arrayU = array.reduce((acumulator, valorAtual) => acumulator.concat(valorAtual), [])
    return arrayU;
  }
  console.log(flatten(arrays));