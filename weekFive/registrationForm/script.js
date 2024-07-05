const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const inputThree = document.getElementById("inputThree");
const btn = document.getElementById("btn");
const alert = document.getElementById("alert");

function register() {
  if (
    inputOne.value === "" ||
    inputTwo.value === "" ||
    inputThree.value === ""
  ) {
    alert.innerText = "Ner esvel Passwordoo Buglunu uu ";
    alert.style.color = "orangered";
  } else if (inputTwo.value !== inputThree.value) {
    alert.innerText = "Password ni taardaggui ee ";
    alert.style.color = "orangered";
  } else if (inputTwo.value.length < 8 || inputThree.value.length < 8) {
    alert.innerText = "8 - aas deesh orontoi password oruulna uu ";
    alert.style.color = "orangered";
  } else {
    alert.innerText = "Burtgel amjilttai bolloo";
    alert.style.color = "green";
  }
}

btn.onclick = register;
