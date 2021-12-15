'use strict';
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
const cloneScreen = screens[0].cloneNode(true);

const cmsCheckbox = document.querySelector('#cms-open')
const cmsVariants = document.querySelector('.hidden-cms-variants')
const otherOption = document.querySelector('#cms-select');
const otherInput = document.querySelector('.hidden-cms-variants > .main-controls__input')
const otherInputValue = document.querySelector('#cms-other-input');

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
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    this.logger(); 
  },
  showResult: function() {
    total.value = this.screenPrice;
    totalCount.value = this.countScreens;
    totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
    totalFullCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },
  init: function(){
    this.addTitle();
    this.cmsView();
    rollbackInput.addEventListener('input', this.addRollback.bind(this));
    startBtn.addEventListener('click', this.checkValues.bind(this));  
    buttonPlus.addEventListener('click', this.addScreenBlock);
    otherOption.addEventListener('input',this.cmsOtherOption);
    resetBtn.addEventListener('click', this.reset.bind(this));// addEventListener - имеет свой констекст вызова (this), bind переопределяет this другим контекстом вызова, в данном случае тот, который находится выше по дереву. (appData).
    otherOption.addEventListener('input',this.cmsOtherOption);
  },
  cmsView: function() {
   cmsCheckbox.addEventListener('click', () => {
     if (cmsCheckbox.checked) {
     cmsVariants.style.display = 'flex';
     } else {
      cmsVariants.style.display = 'none';
     }
   });
  },
  cmsOtherOption: function() {
      if (this.value === 'other') {
/*           debugger
          (()=>{
          console.log(this);
          })(); */
      otherInput.style.display = 'flex';
      } else {
         (this.value !== 'other');
/*           debugger
          (()=>{
          console.log(this);
          })(); */
      otherInput.style.display = 'none';
      }
      console.log(otherOption.value);
  },
  addTitle: function() { 
    document.title = title.textContent;
  },
  checkValues: function() {
    this.isError = false;
    screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      if (select.value === '' || input.value.trim() === ''){
        this.isError = true;
      }
    });        
    if (!this.isError) {
    this.start();
    } else {
    alert('Выберите тип мониторов и их количество');
    }
  },
  addScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
      if(select.value === '' || input.value.trim() === '') {
          startBtn.disabled = true;
        if(select.value !== '' || input.value.trim() !== '') {
          startBtn.disabled = false;
        }
      } else {
        select.disabled = true;
        input.disabled = true;
        buttonPlus.disabled = true;

        cmsCheckbox.disabled = true;
        cmsVariants.disabled = true;
        otherOption.disabled = true;
        otherInput.disabled = true;
        otherInputValue.disabled = true;

        startBtn.style.display = 'none'
        resetBtn.style.display = 'flex'
        otherItemsNumber.forEach((item) => {
          const check = item.querySelector('input[type=checkbox]');
          const input = item.querySelector('input[type=text]');
            check.disabled = true;
            input.disabled = true;
            otherItemsPercent.forEach((item) => {
              const check = item.querySelector('input[type=checkbox]');
              const input = item.querySelector('input[type=text]');
              check.disabled = true;
              input.disabled = true;
            });
          });
      }
        this.screens.push({
          id: index, 
          name: selectName, 
          price: +select.value * +input.value,
          count: +input.value
          });
    });
  },
  addServices: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked)
      this.servicesPercent[label.textContent] = +input.value;
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if(check.checked)
      this.servicesNumber[label.textContent] = +input.value;
    });
  },
  addScreenBlock: function() {
    let newCloneScreen = cloneScreen.cloneNode(true);
    screens[screens.length - 1].after(newCloneScreen); 
    screens = document.querySelectorAll('.screen');
  },
  addPrices: function() {
    for (let screen of this.screens){
      this.screenPrice += +screen.price;  
      };
    for (let key in this.servicesNumber){
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent){
      this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100 );
    };     
      this.otherOption = +otherOption.value
      this.otherInputValue = +otherInputValue.value
      if (otherOption.value === '50') {
        this.fullPrice = (+this.screenPrice + +this.servicePricesPercent + +this.servicePricesNumber) + ((+this.screenPrice + +this.servicePricesPercent + +this.servicePricesNumber) * (this.otherOption / 100));
      } else if (otherInputValue.value !== 0) {
        this.fullPrice = (+this.screenPrice + +this.servicePricesPercent + +this.servicePricesNumber) + ((+this.screenPrice + +this.servicePricesPercent + +this.servicePricesNumber) * (this.otherInputValue / 100));
      } else {
        this.fullPrice = +this.screenPrice + +this.servicePricesPercent + +this.servicePricesNumber;
      }
      this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100 )));
      this.countScreens = this.screens.map((a) => {
        return a.count;
        }).reduce((previousValue, currentValue) => {
        return +previousValue + +currentValue;
        });
  },
  addRollback: function(event) {
    rollbackSpan.textContent = event.target.value + '%'; 
    this.rollback = +rollbackInput.value
    this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback / 100 )));
    totalCountRollback.value = this.servicePercentPrice;
  },
  changeStartBtn: function() {
    let btnStart = document.getElementsByClassName('handler_btn')[0];
    btnStart.style.display = 'none';
    let btnReset = document.getElementsByClassName('handler_btn')[1];
    btnReset.style.display = '';
  },
  reset: function () {
    this.removeBlockScreens();
    this.resetBlockScreens();
    this.resetBlockItems();
    this.rollbackReset();
    this.resetTotalInput();
    this.changeResetBtn();
    this.resetCmsControl();
    this.clear();
  },
  removeBlockScreens: function() {
    screens = document.querySelectorAll('.screen');
    screens.forEach((screen, index) => {
        if (index !== 0) {
        screen.remove();
        }
    });
    let newScreen = screens[0];
        screens = [];
        screens.push(newScreen);
  },
  resetBlockScreens: function() {
    const buttonPlus = document.querySelector('.screen-btn');
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      select.disabled = false;
      select.value = '';
      input.disabled = false;
      input.value = '';
      buttonPlus.disabled = false;
    });
  },
  resetBlockItems: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const input = item.querySelector('input[type=text]');
      check.disabled = false;
      check.checked = false;
      input.disabled = true;
    });
    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const input = item.querySelector('input[type=text]');
      check.disabled = false;
      check.checked = false;
      input.disabled = true;
    });
  },
  rollbackReset: function() {
    rollbackSpan.textContent = '0' + '%';
    rollbackInput.value = 0;
  },
  resetTotalInput: function() {
    total.value = '';
    totalCount.value = '';
    totalCountOther.value = '';
    totalFullCount.value = '';
    totalCountRollback.value = '';
  },
  resetCmsControl: function () {

    cmsCheckbox.disabled = false;
    cmsCheckbox.checked = false;
    cmsVariants.disabled = false;
    otherOption.disabled = false;
    otherInput.disabled = false;
    otherInputValue.disabled = false;
    otherOption.value = '';
    otherInputValue.value = '';
    cmsVariants.style.display = 'none';
    otherInput.style.display = 'none';
  },
  changeResetBtn: function() {
    let btnReset = document.getElementsByClassName('handler_btn')[1];
    btnReset.style.display = 'none';
    let btnStart = document.getElementsByClassName('handler_btn')[0];
    btnStart.style.display = '';
  },
  clear: function() {
    this.title = '';
    this.screens = [];
    this.screenPrice = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.isError = false;
  },
  logger: function (){
    console.log(this.screens);
    console.log(this.screenPrice + ' руб - cтоимость выбранных мониторов');
    let adapTive = this.adaptive ? ' нужен' : ' не нужен';
    console.log(`Адаптив${adapTive}`);
    console.log(this.rollback + '% - Процент отката посреднику');
    console.log(this.fullPrice + ' руб - полная стоимость');
    console.log(this.servicePercentPrice + ' руб - полная стоимость за вычетом отката посреднику');
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

