//2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest .

// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((acc, vlr) => acc + vlr);
console.log(sum(1, 2, 3));