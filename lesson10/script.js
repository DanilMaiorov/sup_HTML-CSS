'use strict';

const lists = document.querySelectorAll ('.books');

const elems = document.querySelectorAll ('.book');
    elems[0].before(elems[1]);
    elems[3].before(elems[4]);
    elems[2].remove();
    lists[0].append(elems[2]);


const body = document.querySelector('body');
    body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


const anch = document.querySelectorAll('a');
    anch[2].innerHTML = 'Книга 3. this и Пропотипы Объектов';


const adv = document.querySelector('.adv');
    adv.remove();

const parts = document.querySelectorAll('li')
    elems[0].append(parts[10], parts[11], parts[13], parts[15], parts[8], parts[16]);
    elems[5].append(parts[45], parts[39], parts[40], parts[38], parts[42], parts[43], parts[41], parts[44], parts[46]); 

const newPart = document.createElement('li');
    newPart.innerHTML = 'Глава 8: За пределами ES6';
    elems[2].append(newPart);

const parts1 = document.querySelectorAll('li');
    parts1[56].before(parts1[57]);

