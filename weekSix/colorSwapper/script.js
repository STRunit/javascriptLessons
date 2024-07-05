const boxes = document.getElementsByClassName("box");

// const button = document.getElementsByTagName("button")[0];

const jokerColors = [
  "#4B0082", // Joker Dark Purple
  "#ADFF2F", // Joker Light Green
  "#F5F5DC", // Joker Cream White
  "#2F2F2F", // Joker Dark Grey
  "#8B0000", // Joker Blood Red
];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = jokerColors[i];
}

const colorSwapper = () => {
  const shift = jokerColors.shift();
  jokerColors.push(shift);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = jokerColors[i];
  }
};

setInterval(colorSwapper, 1000);
// button.onclick = colorSwapper;
