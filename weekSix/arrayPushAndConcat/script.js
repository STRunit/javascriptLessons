const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = [];
const even = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    odd.push(arr[i]);
  } else {
    even.push(arr[i]);
  }
}

const result = odd.concat(even);

console.log(result);
