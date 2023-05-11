const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

function week() {  
  let output = '';
  
  for (let weekDay of weekDays) {
    output += `<div>${weekDay}</div>`;
  }
  
  return output;
}

let semana = week();

const months1 = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const leftArrow = document.querySelector('#days .ph-caret-left');
const rightArrow = document.querySelector('#days .ph-caret-right');
const headerSpan = document.querySelector('#days header span');

let monthOffset = 0;

leftArrow.addEventListener('click', function() {
  monthOffset--;
  updateMonthYear();
  updateMain();
});

rightArrow.addEventListener('click', function() {
  monthOffset++;
  updateMonthYear();
  updateMain();
});

function updateMonthYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const targetDate = new Date(currentYear, currentMonth + monthOffset, 1);
  const targetMonth = targetDate.getMonth();
  const targetYear = targetDate.getFullYear();

  headerSpan.innerHTML = `<div>${months1[targetMonth]}</div><div>${targetYear}</div>`;
}

function getDaysInMonth(year, month) {
  const days = [];
  const lastDay = new Date(year, month + 1, 0).getDate();
  
  for (let day = 1; day <= lastDay; day++) {
    days.push(day);
  }
  
  return days;
}

function updateMain() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const targetDate = new Date(currentYear, currentMonth + monthOffset, 1);
  const targetMonth = targetDate.getMonth();
  const targetYear = targetDate.getFullYear();

  const dias = getDaysInMonth(targetYear, targetMonth);
  const daysHTML = thisMonthDays(dias);
  document.querySelector('#days main').innerHTML = daysHTML;
}

function getPreviousMonthDays(year, month) {
  const days = [];
  const prevMonth = month - 1;
  const prevMonthYear = year;
  
  if (prevMonth < 0) {
    prevMonth = 11;
    prevMonthYear--;
  }
  
  const lastDay = new Date(prevMonthYear, prevMonth + 1, 0).getDate();
  
  for (let day = 1; day <= lastDay; day++) {
    days.push(day);
  }
  
  return days;
}


function getNextMonthDays(year, month) {
  const days = [];
  const nextMonth = month + 1;
  const nextMonthYear = year;
  
  if (nextMonth > 11) {
    nextMonth = 0;
    nextMonthYear++;
  }
  
  const lastDay = new Date(nextMonthYear, nextMonth + 1, 0).getDate();
  
  for (let day = 1; day <= lastDay; day++) {
    days.push(day);
  }
  
  return days;
}

function thisMonthDays(dias, year, month) {
  let thisMonthDays = '';

  for (let day of dias) {
    thisMonthDays += `<div>${day}</div> `;
  }
  
  
  return thisMonthDays;
}



document.querySelector('#days .week').innerHTML = semana;
updateMonthYear();
updateMain();


