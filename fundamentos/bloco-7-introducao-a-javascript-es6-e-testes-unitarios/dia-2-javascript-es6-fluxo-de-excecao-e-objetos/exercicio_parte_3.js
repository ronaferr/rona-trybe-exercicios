const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  /* Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/

/* const addTurn = (obj, newKey, keyValue) => {
obj[newKey] = keyValue;
return obj;
}
console.log(addTurn(lesson2, 'turno', 'noite')); */

/*Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/


/* const listKeys = (obj) => {
    const list = Object.keys(obj);
    for (element of list) {
        console.log(element);
    }
}
listKeys(lesson2); */


/*Crie uma função para mostrar o tamanho de um objeto.*/

/* const sizeObj = (obj) => {
    const size = Object.keys(obj).length;
    return size;
}
console.log(sizeObj(lesson1)); */

/*Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

/* const listValues = (obj) => {
    const list = Object.values(obj);
    for (element of list) {
        console.log(element);
    }
}
listValues(lesson1); */

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */

/* const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons); */

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */

/* const totalStudents = () => {
const studentsLesson1 = allLessons.lesson1.numeroEstudantes;
const studentsLesson2 = allLessons.lesson2.numeroEstudantes;
const studentsLesson3 = allLessons.lesson3.numeroEstudantes;
const total = studentsLesson1 + studentsLesson2 + studentsLesson3;
console.log(total);
}
totalStudents(); */

/* Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: */
/* console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica' */

/* const keyValor = (obj, index) => {
const key = Object.values(obj);
return key[index];
}
console.log(keyValor(lesson1, 0)); */

/* Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: */

/* console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */

const verificaçãoInfo = (obj, key, valor) => {
  const listKeys = Object.keys(obj);
  const listValors = Object.values(obj);
  let awnser = true;
  for (let element of listKeys) {
    if (element === key) {
      awnser = true;
    } else {
      awnser = false;
    }
  }
  for (let element of listValors) {
    if (element === valor) {
      awnser = true;
    } else {
      awnser = false;
    }
    }
  return awnser;
}
console.log(verificaçãoInfo(lesson3, 'turno', 'noite'));