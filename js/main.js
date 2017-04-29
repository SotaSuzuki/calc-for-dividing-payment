'use strict';

var totalPrice = document.getElementById('total');
var numOfPeople = document.getElementById('people');
var enter = document.getElementById('enter');
var result = document.getElementById('result');

// Select an input form when the page initialize
totalPrice.focus();

enter.addEventListener('click', calc, false);


function calc () {
  var tp = totalPrice.value;
  var nop = numOfPeople.value;
  var x1, x2, y1, y2;
  var unit = 10;

  if (!tp.match(/^[1-9][0-9]*/) || !nop.match(/^[1-9][0-9]*/)) {
    result.textContent = 'An input Error occurred'
    result.style.color = 'red';
    totalPrice.select();
    return;
  }

  if (tp % nop === 0) {
    result.textContent = `Each person should pay $${tp / nop}`;
    return;
  }

  x1 = Math.floor(tp / nop / unit) * unit;
  y1 = tp - (x1 * nop);
  x2 = Math.ceil(tp / nop / unit) * unit;
  y2 = -(tp - (x2 * nop));

  result.innerHTML =
    `If each person pays $${x1}, it needs further $${y1} to pay.<br>
    If each person pays $${x2}, $${y2} remain.`;
}
