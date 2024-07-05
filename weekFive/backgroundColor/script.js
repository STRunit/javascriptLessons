const btn = document.getElementById("btn");
const colorText = document.getElementById("color");

let generatedColor = ``;

function colorGenerate() {
  return Math.round(Math.random() * 255);
}

function clickHandler() {
  generatedColor = `RGB(${colorGenerate()}, ${colorGenerate()}, ${colorGenerate()})`;
  document.body.style.backgroundColor = generatedColor;
  colorText.innerText = generatedColor;
}

btn.onclick = clickHandler;
