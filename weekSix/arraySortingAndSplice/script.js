const colors = [
  "red",
  "blue",
  "green",
  "red",
  "blue",
  "green",
  "red",
  "blue",
  "green",
];

const red = [];
const blue = [];
const green = [];

colors.sort();

const splicedBlue = colors.splice(0, 3);
const splicedGreen = colors.splice(0, 3);
const splicedRed = colors.splice(0, 3);

blue.push(splicedBlue);
green.push(splicedGreen);
red.push(splicedRed);

console.log(blue, green, red);
