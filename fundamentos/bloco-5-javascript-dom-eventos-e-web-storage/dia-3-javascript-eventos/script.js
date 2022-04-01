function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // Exercicio 1
  // Escreva seu código abaixo.
function daysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    // onde inserir
    const diasUL = document.querySelector('#days');
    
    // customizar
    for (let i = 0; i < dezDaysList.length; i += 1) {
        const day = dezDaysList[i];
        dayList = document.createElement('li');
        if (day === 24 || day === 31) {
        dayList.className = 'day holiday';
        dayList.innerHTML = day;
        } else if (day === 25) {
        dayList.className = 'day holiday friday';
        dayList.innerHTML = day;
        } else if (day === 4 || day === 11 || day === 18) {
        dayList.className = 'day friday';
        dayList.innerHTML = day;
        } else {
        dayList.className = 'day';
        dayList.innerHTML = day;
        }
        
        diasUL.appendChild(dayList);
    }
    //aplicar
};
daysOfMonth();

// Exercicio 2
function holidays(buttomName){
    //onde inserir
    let divContanier = document.querySelector('.buttons-container');
    
    //cutomizar
    let botom = document.createElement('button');
    botom.id = 'btn-holiday';
    botom.innerHTML = buttomName;

    //aplicar
    divContanier.appendChild(botom);
}
holidays('Feriados');


// Exercicio 3
function changeColor() {
    let bottom = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let originalColor = 'rgb(238,238,238)';
    let newColor = 'blue';

    bottom.addEventListener('click', function() {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.backgroundColor === newColor) {
                holidays[i].style.backgroundColor = originalColor;
            } else {
                holidays[i].style.backgroundColor = newColor;
            }
        }
    })
};
changeColor();

// Exercicio 4

function heyFriday(day) {
    // onde inserir
    let mae = document.querySelector('.buttons-container');

    //customizar
    let eSexta = document.createElement('button');
    eSexta.id = 'btn-friday';
    eSexta.innerHTML = day

    //aplicar
    mae.appendChild(eSexta);
}
heyFriday('Sexta-Feira');

//Exercicio 5

function mudarAsCaixas(string) {
    let btnFriday = document.querySelector('#btn-friday');
    let everyFridays = document.querySelectorAll('.friday');
    let newText = 'Sexta';

    btnFriday.addEventListener('click', function() {
        for (let i = 0; i < everyFridays.length; i += 1) {
            if (everyFridays[i].innerHTML !== newText) {
                everyFridays[i].innerHTML = newText;
            } else {
                everyFridays[i].innerHTML = string[i];
            }
        }
    })

}
let sextas = [4,11,18,25];
mudarAsCaixas(sextas);

// Exercicio 6
function aumentoTexto() {
    let dias = document.querySelector('#days');

    dias.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}
function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
aumentoTexto();
dayMouseOut();

// Exerciío 7
function newTaskSpan(task) {

    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
  
    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
  };
  
  newTaskSpan('Projeto:');

  // Exercício 8
  function newTaskDiv(color) {

    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');
  
    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
  };
  
  newTaskDiv('green');

  // Exercicio 9
  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  // Exercicio 10
  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();

  //bonus
  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();


 