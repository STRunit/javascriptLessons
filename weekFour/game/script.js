const greenYellow = document.getElementsByClassName("greenYellow")[0];

const deepSkyBlue = document.getElementsByClassName("deepSkyBlue")[0];

const scoreLeft = document.getElementsByClassName("left")[0];

const scoreRight = document.getElementsByClassName("right")[0];

const instructions = document.querySelectorAll(".instruction");

let greenYellowWidth = 50;
let deepSkyBlueWidth = 50;
let counter = 0;

greenYellow.onclick = changeToGreenYellowWidth;
deepSkyBlue.onclick = changeToDeepSkyBlueWidth;
document.addEventListener(
  "keydown",

  function keyHandler(event) {
    if (event.key === "a" || event.key === "A") {
      changeToGreenYellowWidth();
      hideInstruction();
    } else if (event.key === "l" || event.key === "L") {
      changeToDeepSkyBlueWidth();
      hideInstruction();
    }
  }
);

function hideInstruction() {
  instructions.forEach(function (instruction) {
    instruction.style.display = "none";
  });
}

function changeToGreenYellowWidth() {
  greenYellowWidth++;
  deepSkyBlueWidth--;
  greenYellow.style.width = `${greenYellowWidth}vw`;
  deepSkyBlue.style.width = `${deepSkyBlueWidth}vw`;
  scoreLeft.innerText = counter;
  counter++;
}

function changeToDeepSkyBlueWidth() {
  deepSkyBlueWidth++;
  greenYellowWidth--;
  greenYellow.style.width = `${greenYellowWidth}vw`;
  deepSkyBlue.style.width = `${deepSkyBlueWidth}vw`;
  scoreRight.innerText = counter;
  counter++;
}
