/* 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula. */

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
    // escreva seu código aqui
    const lettersA = array.reduce((acc, words) => acc + words.split('').reduce((acumulator, letter) => (letter === 'a' || letter === 'A') ? acumulator + 1 : acumulator + 0, 0), 0);
    return lettersA;
  }
  console.log(containsA(names));