//Not finished !

let nums = [
  [3, 2, 4],
  [10, 5, 9],
  [4, 6, 10],
];

for (let i = 0; i < nums.length; i++) {
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[i][j];
  }
  console.log(sum);
}
