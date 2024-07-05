const arr = [3, 2, 1, 1, 1, 1, 2, 3, 1, 5]; // [1,2,3]
let result = [];

for (let i = 0; i < arr.length; i++) {
  let min = i;
  for (let j = i; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[min];
      arr[min] = temp;
    }
  }
  if (arr[i] !== arr[i - 1]) {
    result.push(arr[i]);
  }
}
console.log(result);

// // Make this one Function !
