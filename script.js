'use strict';

const title = 'Название проекта';

let screens = 'Простые, Сложные, Интерактивные'.toLowerCase() ,

screenPrice = 5000 ,

rollback = 15 ,

fullPrice = 80000 ,

adaptive = true ;

  console.log(typeof title);

  console.log(typeof fullPrice);

  console.log(typeof adaptive);

  console.log(screens.length);

  console.log("Cтоимость верстки экранов " + screenPrice + " рублей");

  console.log("Cтоимость разработки сайта " + fullPrice + " рублей");

  console.log(screens.split(', '));

  console.log("Процент отката посреднику за работу " + fullPrice * ( rollback / 100));