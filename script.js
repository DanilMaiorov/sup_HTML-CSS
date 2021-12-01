'use strict';


//let title = getTitle(prompt('Как называется Ваш проект?'));
let title = prompt('Как называется Ваш проект?');
    title = getTitle(title);

let screens = prompt('Какие типы экранов нужно разработать?', 'например: Простые, Сложные, Интерактивные '),
    screenPrice = +prompt('Сколько будет стоить данная работа? например:', ' 12000'),
    adaptive = confirm('Нужен ли адаптив на сайте?'),
    service1 = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив мобильной'),
    servicePrice1 = +prompt('Сколько это будет стоить?', 3000),
    service2 = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив планшета'),
    servicePrice2 = +prompt('Сколько это будет стоить?', 4000),
    rollback = 15;

function getTitle(title) {
  let newTitle = title.trim();

  return newTitle.slice(0, 1).toUpperCase() + newTitle.slice(1).toLowerCase();
}

const getAllServicePrices = function() {
  return servicePrice1 + servicePrice2;
};

const allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice();

function getServicePercentPrices () {
  return Math.ceil(fullPrice - (fullPrice * ( rollback / 100 )));
}

let servicePercentPrice = getServicePercentPrices();

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

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
showTypeOf(screens);
showTypeOf(service1);
showTypeOf(servicePrice1);
showTypeOf(service2);
showTypeOf(servicePrice2);
showTypeOf(rollback);
showTypeOf(allServicePrices);
showTypeOf(servicePercentPrice);

console.log(screens.split(', '));
console.log(getRollBackMessage());
console.log(getServicePercentPrices() + ' стоимость за вычетом процента отката посреднику');