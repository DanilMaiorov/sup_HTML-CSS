'use strict';

const title = prompt('Как называется Ваш проект?');

let screens = 'Простые, Сложные, Интерактивные'.toLowerCase();

    screens = prompt('Какие типы экранов нужно разработать? например:', ' Простые, Сложные, Интерактивные');

let screenPrice = parseInt(prompt('Сколько будет стоить данная работа? например:', ' 12000 рублей'));

let rollback = 15;

let service1 = prompt('Какой дополнительный тип услуги нужен?');

let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'), 2);

console.log(servicePrice1 + ' рублей');

let service2 = prompt('Какой дополнительный тип услуги нужен?');

let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'), 2);

console.log(servicePrice2 + ' рублей');

let fullPrice = parseInt(screenPrice + servicePrice1 + servicePrice2);

if (30000 < fullPrice) {
  Math.ceil(fullPrice * 0.9);

  console.log('Даём скидку 10%');

  console.log('Сумма скидки ' + fullPrice * 0.1 + ' рублей');

} else if (15000 <= fullPrice && fullPrice <= 30000) {
  Math.ceil(fullPrice * 0.95);

  console.log('Даём скидку 5%');

  console.log('Сумма скидки ' + fullPrice * 0.05 + ' рублей');

} else if (0 < fullPrice && fullPrice < 15000) {

  console.log('Скидка не предусмотрена');

  console.log(fullPrice);

} else { (fullPrice < 0); 

  console.log('Что-то пошло не так');
}

console.log(fullPrice + ' рублей');

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * ( rollback / 100 )));

console.log(servicePercentPrice + ' рублей');

let adaptive = confirm('Нужен ли адаптив на сайте?');

  console.log(typeof title);

  console.log(typeof fullPrice);

  console.log(typeof adaptive);

  console.log(screens.length);

  console.log("Cтоимость верстки экранов " + screenPrice + " рублей");

  console.log("Cтоимость разработки сайта " + fullPrice + " рублей");

  console.log(screens.split(', '));

  console.log("Процент отката посреднику за работу " + fullPrice * ( rollback / 100));