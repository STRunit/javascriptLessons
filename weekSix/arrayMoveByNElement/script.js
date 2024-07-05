const arr = [1, 2, 3, 4, 5];

function moveByNElement(n) {
  for (let j = 0; j < n; j++) {
    let firstElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }

    arr[[arr.length - 1]] = firstElement;
  }
  return arr;
}

console.log(moveByNElement(3));
