const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Parte 1
//Crie um calendário dinamicamente.
//O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

 let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

 const createDaysOfTheMonth = () => {
   let getDaysList = document.querySelector('#days');
 
   for (let index = 0; index < decemberDaysList.length; index += 1) {
     
     let day = decemberDaysList[index];
     let dayItem = document.createElement('li');
     dayItem.innerHTML = day;
     
     if (day === 24 || day === 31) {
       // Caso o dia for 24 ou 31
       dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
       getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
     } else if (day === 4 || day === 11 || day === 18) {
       // Caso o dia for 4, 11 ou 18
       dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
       getDaysList.appendChild(dayItem);
     } else if (day === 25) {
       // Caso o dia for 25
       dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
       getDaysList.appendChild(dayItem);
     } else {
       // Caso seja qualquer outro dia adicione a classe day ao li criado
       dayItem.className = 'day';
       getDaysList.appendChild(dayItem);
     }
   }
 }

 createDaysOfTheMonth();
 
 // Parte 2
//Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
//Sua função deve receber um parâmetro com a string 'Feriados';
//Adicione a este botão a ID "btn-holiday";
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const createHolidayButton = (buttonName) => {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;

  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

// Parte 3

/* implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
 */

const displayHolidays = () => {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = '#008000';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', () => {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

displayHolidays();
