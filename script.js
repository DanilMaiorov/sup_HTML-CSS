'use strict';


//let title = getTitle(prompt('Как называется Ваш проект?'));
let title,
    screens,
    screenPrice,
    adaptive,
    rollback = 15,
    allServicePrices,
    fullPrice,
    servicePercentPrice,
    service1,
    service2;

function isNumber (num){
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
  title = prompt('Как называется Ваш проект?', "Калькулятор верстки");
  screens = prompt('Какие типы экранов нужно разработать?', 'например: Простые, Сложные, Интерактивные ');
  screenPrice;

    do {
      screenPrice = prompt('Сколько будет стоить данная работа?');
    }
    while (!isNumber(screenPrice)) {
    }
  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function() {

    let sum = 0;

    for (let i = 0; i < 2; i++) {

       if (i === 0) {
        service1 = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив мобильной');
      } else if  (i === 1) {
        service2 = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив планшета');
      }

        let result;
        do {
          result = prompt('Сколько это будет стоить?');
        }
        while (!isNumber(result)); {
          sum = sum + +result;
        }
    }
    return sum;
};    
    
function getTitle(title) {
  let newTitle = title.trim();

  return newTitle.slice(0, 1).toUpperCase() + newTitle.slice(1).toLowerCase();
}

function getFullPrice() {
  return +screenPrice + +allServicePrices;
}

function getServicePercentPrices () {
  return Math.ceil(fullPrice - (fullPrice * ( rollback / 100 )));
}

const getRollBackMessage = function() {
  let result;

  if (30000 < fullPrice) {
    result = 'Даём скидку ' + 10 + '%';
  } else if (15000 <= fullPrice && fullPrice <= 30000) {
    result = 'Даём скидку ' + 5 + '%';
  } else if (0 < fullPrice && fullPrice < 15000) {
    result = 'Скидка не предусмотрена';
  } else { (fullPrice < 0)
    result = 'Что-то пошло не так';
  }
  return result;
};

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
};

asking();
title = getTitle(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(fullPrice);
showTypeOf(adaptive);
showTypeOf(screens);
showTypeOf(service1);
showTypeOf(service2);
showTypeOf(rollback);
showTypeOf(allServicePrices);
showTypeOf(servicePercentPrice);

console.log('allServicePrices', allServicePrices);
console.log(screens.split(', '));
console.log(getRollBackMessage());
console.log(getServicePercentPrices() + ' стоимость за вычетом процента отката посреднику');