 /*'use strict';
    const appData = {
      title: '',
      screens: '',
      screenPrice: 0,
      adaptive: true,
      rollback: 15,
      allServicePrices: 0,
      fullPrice: 0,
      servicePercentPrice: 0,
      service1: '',
      service2: '',
      asking: function () {
        appData.title = prompt('Как называется Ваш проект?', "Калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'например: Простые, Сложные, Интерактивные ');
      
          do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', '25000');
          }
          while (!appData.isNumber(appData.screenPrice)) {
          }
          appData.adaptive = confirm('Нужен ли адаптив на сайте?');
      },
      isNumber: function (num){
        return !isNaN(parseFloat(num)) && isFinite(num);
      },
      getAllServicePrices: function() {

        let sum = 0;
    
        for (let i = 0; i < 2; i++) {
    
           if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив мобильной');
          } else if  (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Адаптив планшета');
          }
    
            let result;
            do {
              result = prompt('Сколько это будет стоить?', '2000');
            }
            while (!appData.isNumber(result)); {
              sum += +result;
            }
        }
        return sum;
      },
      getTitle: function() {
        let newTitle = appData.title.trim();
      
        return newTitle.slice(0, 1).toUpperCase() + newTitle.slice(1).toLowerCase();
      },
      getFullPrice: function() {
        return +appData.screenPrice + +appData.allServicePrices;
      },
      getServicePercentPrices: function () {
        return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100 )));
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
      start: function(){
        appData.asking();
        appData.title = appData.getTitle();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.logger();
      },
      logger: function (){
        console.log(appData.title + ' - название проекта');
        console.log(appData.screens + ' - выбранные мониторы');
        console.log(appData.screenPrice + ' руб - cтоимость выбранных мониторов');
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
appData.start();*/


//////////////////////////////////////////////////////////////////////////////////////////////////


/*****************ЗАДАНИЕ lesson06******************/

let tryq = 10;

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
secretNumber();
