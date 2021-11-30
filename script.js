'use strict';

const title = prompt('Как называется Ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'например: Простые, Сложные, Интерактивные ');
let screenPrice = +prompt('Сколько будет стоить данная работа? например:', ' 12000 рублей');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?'); 
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'), 2);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'), 2);
let rollback = 15;

  function getTitle(title) {

  let newTitle = title.trimLeft();

  return newTitle.slice(0, 1).toUpperCase() + newTitle.slice(1).toLowerCase();
  }

const getAllServicePrices = function() {

  return servicePrice1 + servicePrice1
  }
  
const allServicePrices = getAllServicePrices();

  function getFullPrice() {
    
  return screenPrice + allServicePrices
  }
let fullPrice = getFullPrice();

let servicePercentPrice = getServicePercentPrices() ;

  function getServicePercentPrices () {

  return Math.ceil(fullPrice - (fullPrice * ( rollback / 100 )))
  }

const getRollBackMessage = function() {
  if (30000 < fullPrice) {
    Math.ceil(fullPrice * 0.9);
    return 'Даём скидку 10%'
  } else if (15000 <= fullPrice && fullPrice <= 30000) {
    Math.ceil(fullPrice * 0.95);
    return 'Даём скидку 5%'
  } else if (0 < fullPrice && fullPrice < 15000) {
    return 'Скидка не предусмотрена'
  } else { (fullPrice < 0); 
    return 'Что-то пошло не так'
  }
}

const showTypeOf = function(variable) {
  console.log(variable, typeof variable)
}
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
console.log(getRollBackMessage())
console.log(getServicePercentPrices() + ' стоимость за вычетом процента отката посреднику')