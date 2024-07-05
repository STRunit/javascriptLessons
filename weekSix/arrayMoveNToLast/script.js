function moveNToLast(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let max = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = max;
      }
    }
  }
  return arr;
}

console.log(moveNToLast([111, 2, 3, -111, -2, -44]));
