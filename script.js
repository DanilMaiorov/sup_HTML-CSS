'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rollbackInput = document.querySelector('.rollback input');
const rollbackSpan = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const totalFullCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  isError: false,
  start: function() {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    appData.showResult();
    appData.logger(); 

    console.dir(rollbackInput);
  },
  showResult: function() {
    total.value = appData.screenPrice;
    totalCount.value = appData.countScreens;
    totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
    totalFullCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;

  },
  init: function(){
    appData.addTitle();
    rollbackInput.addEventListener('input', appData.addRollback);
    startBtn.addEventListener('click', appData.checkValues);  
    buttonPlus.addEventListener('click', appData.addScreenBlock);
  },
  addTitle: function() { 
    document.title = title.textContent;
  },
  checkValues: function() {
    appData.isError = false;
    screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (select.value === '' || input.value.trim() === ''){
      appData.isError = true;
      }
    });        
    if (!appData.isError) {
    appData.start();
    } else {
    alert('Выберите тип мониторов и их количество');
    }  
  },
  addScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
        appData.screens.push({
          id: index, 
          name: selectName, 
          price: +select.value * +input.value,
          count: +input.value
          });   
    });
  },
  addServices: function() {
    otherItemsPercent.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      if(check.checked)
      appData.servicesPercent[label.textContent] = +input.value;
    });
    otherItemsNumber.forEach(function(item){
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked)
      appData.servicesNumber[label.textContent] = +input.value;
    });
  },
  addScreenBlock: function() {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },
  addRollback: function(event) {
    rollbackSpan.textContent = event.target.value + '%'; 
    appData.rollback = +rollbackInput.value
    appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100 )));
    totalCountRollback.value = appData.servicePercentPrice;
  },
  
  addPrices: function() {
    for (let screen of appData.screens){
      appData.screenPrice += +screen.price;  
      };
    for (let key in appData.servicesNumber){
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent){
      appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100 );
    }
      appData.fullPrice = +appData.screenPrice + +appData.servicePricesPercent + +appData.servicePricesNumber;

      appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback / 100 )));
      
      appData.countScreens = appData.screens.map(function (a) {
        return a.count;
        }).reduce(function(previousValue, currentValue) {
        return +previousValue + +currentValue;
        });
  },

  logger: function (){
    console.log(appData.screens);
    console.log(appData.screenPrice + ' руб - cтоимость выбранных мониторов');
    let adapTive = this.adaptive ? ' нужен' : ' не нужен';
    console.log(`Адаптив${adapTive}`);
    console.log(appData.rollback + '% - Процент отката посреднику');
    console.log(appData.fullPrice + ' руб - полная стоимость');
    console.log(appData.servicePercentPrice + ' руб - полная стоимость за вычетом отката посреднику');
  },
  };
appData.init();

//////////////////////////////////////////////////////////////////////////////////////////////////


/*****************ЗАДАНИЕ lesson06******************/

/*  let tryq = 10;

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
