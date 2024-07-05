const Increment = document.getElementById("btn+");
const Decrement = document.getElementById("btn-");
const givenNumber = document.getElementById("givenNumber");

let count = 0;

function changeNumber() {
  givenNumber.innerText = count;
}

function btnPlus() {
  count++;
  changeNumber(count);
}

function btnMinus() {
  count--;
  changeNumber(count);
}

Increment.onclick = btnPlus;
Decrement.onclick = btnMinus;
givenNumber.innerText = 0;
