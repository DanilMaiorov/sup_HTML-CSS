'use strict';
 
const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 15,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: [],

  start: function(){
    appData.asking();
    appData.addPrices();
    appData.getTitle();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.logger();
  },
  asking: function () {
    appData.title 
    for (let i = 0; i < 1; i++) {

      let titleName = 0;
      do {
        titleName = prompt('Как называется Ваш проект?', "Калькулятор верстки");
      }
      while (!appData.isString(titleName)) {
      };
      appData.title = titleName;
    }
      for (let i = 0; i < 1; i++) {
      
        let name = 0;
        do {
          name = prompt('Какие типы экранов нужно разработать?', 'например: Простые, Сложные, Интерактивные ');
        }
        while (!appData.isString(name)) {
        }
        
        let price = 0;
        do {
          price = prompt('Сколько будет стоить данная работа?', '25000');
        }
        while (!appData.isNumber(price)) {
        }
        appData.screens.push({id: i, name: name, price: price});
      }
      for (let i = 0; i < 2; i++) {

        let name = 0;
        do {
          name = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив мобильной');
        }
        while (!appData.isString(name)) {
        };

        let price = 0
        do {
          price = prompt('Сколько это будет стоить?', '2000');
        }
        while (!appData.isNumber(price)); {
          appData.services.push({id: i, name: name, price: price});
        }
    }
      appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrices: function() {
    appData.screenPrice = appData.screens.map(function (a) {
      return a.price;
    }).reduce(function (previousValue, currentValue) {
      return +previousValue + +currentValue;
    });

    for (let price of appData.services){
      appData.allServicePrices += +price.price; 
  }
  },
  isNumber: function (num){
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str){
    return isNaN(parseFloat(str)) && !isFinite(str);
  },

  getTitle: function() {
    appData.title = appData.title.trim();

    appData.title = appData.title.slice(0, 1).toUpperCase() + appData.title.slice(1).toLowerCase();
  },
  getFullPrice: function() {
    appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100 )));
  },
  getRollBackMessage: function() {
    let result;
    if (30000 < appData.fullPrice) {
      result = 'Даём скидку ' + 10 + '%';
    } else if (15000 <= appData.fullPrice && appData.
      fullPrice <= 30000) {
      result = 'Даём скидку ' + 5 + '%';
    } else if (0 < appData.fullPrice && appData.fullPrice < 15000) {
      result = 'Скидка не предусмотрена';
    } else { (appData.fullPrice < 0)
      result = 'Что-то пошло не так';
    }
    return result;
  },
  logger: function (){
    console.log(appData.title + ' - название проекта');
    console.log(appData.screens);
    console.log(appData.screenPrice + ' руб - cтоимость выбранных мониторов');
    console.log(appData.services);
    let adapTive = this.adaptive ? ' нужен' : ' не нужен';
    console.log(`Адаптив${adapTive}`);
    console.log(appData.rollback + '% - Процент отката посреднику');
    console.log(appData.allServicePrices + ' руб - Общая стоимость дополнительных услуг');
    console.log(appData.fullPrice + ' руб - полная стоимость');
    console.log(appData.servicePercentPrice + ' руб - полная стоимость за вычетом отката посреднику');
    console.log(appData.getRollBackMessage());
    for (let key in appData){
        console.log('Свойства и методы объекта - ' + key);
    }
  },
  }
appData.start();

//////////////////////////////////////////////////////////////////////////////////////////////////


/*****************ЗАДАНИЕ lesson06******************/

/* let tryq = 10;

let randomNumber = Math.floor(Math.random() * 100 );

function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function secretNumber () {

  let userNumber = prompt('Угадай число от 1 до 100');
      
   console.log(userNumber);
  console.log(randomNumber);

   if(isNumber(userNumber)) {
       userNumber = +userNumber;

      if (userNumber > randomNumber) {
      alert ('Загаданное число меньше!');

      } else if (userNumber < randomNumber) {
      alert ('Загаданное число больше!');

      } else if (userNumber === randomNumber) {
      alert ('Поздравляю, Вы угадали!!!!');
          
      return userNumber;
      }

  } else if (userNumber === null) {
      confirm ('Игра окончена!'); 

      return
  } else {
      alert ('Введите числовое значение, мой друг!')
  }
      return secretNumber();
}
secretNumber(); */