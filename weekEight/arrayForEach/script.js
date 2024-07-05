const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

let product = 1;

arr.forEach((element) => {
  if (element % 2 == 0) {
    sum += element;
  } else {
    product *= element;
  }
});

console.log("sum = ", sum, "product = ", product);
