function minMaxFinder(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    } else if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(`Хамгийн бага тоо: ${min} \nХамгийн их тоо: ${max}`);
}

minMaxFinder([-14, 12, 13, 4, 1, 0, -12, 21]);
