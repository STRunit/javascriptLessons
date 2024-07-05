const array = [
  [7, 14, 34],
  [2, 21, 98],
  [13, 48, 46],
];

let sum = 0;

function findSum(row) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i == row - 1) {
        sum += array[i][j];
      }
    }
  }
  return sum;
}
console.log(findSum(2));
