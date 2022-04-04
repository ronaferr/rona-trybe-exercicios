/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

/* const newEmployees = (employeeGeneration) => {
    const employees = {
        id1: employeeGeneration('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: employeeGeneration('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: employeeGeneration('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const employeeGeneration = (fullName) => {
    let email = fullName.toLowerCase().split(' ').join('_');
    return {
        name: fullName,
        email: `${email}@tribe.com`,
    }
}
console.log(newEmployees(employeeGeneration)); */

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
/* const sorteio = (aposta, conference) => {
if (aposta === conference()) {
    return 'Parabéns você ganhou';
} return 'Tente novamente'
}

const conference = () => {
    let number = Math.round(Math.random()*5) ;
    return number;
}
console.log(sorteio(2, conference)); */


/* // VERSÃO DO GABARITO ABAIXO
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker)); */

/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */

/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; */

//Baby Steps
// 1 criar função hof com 3 parametros: array corretas, array pra verificar, function;
// 2 retornar pontuação
// atribuir pontos para questões

/* function correçãoProva(gabarito, respostas, callback) {
return callback(gabarito, respostas);
}

const correção = (gabarito, respostas) => {
    let points = 0;
    for (let index = 0; index < respostas.length; index += 1) {
        if (respostas[index] === gabarito[index]) {
            points += 1;
        } else if (respostas[index] === 'N.A') {
            points += 0;
        } else {
            points -= 0.5;
        }
    } return points;
}
console.log(correçãoProva(RIGHT_ANSWERS, STUDENT_ANSWERS, correção)); */

//VERSÃO GABARITO
/* const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers)); */