const numbers = {
  num1: 4,
  num2: 2,
  num3: 3,
  num4: 5,
  num5: 1,
};

numbers.sum = numbers.num1;
numbers.difference = numbers.num1;
numbers.product = numbers.num1;
numbers.quotient = numbers.num1;

const arr = Object.values(numbers);

// arr.map((element, index) => {
//   if (
//     index === arr.length - 1 ||
//     index === arr.length - 2 ||
//     index === arr.length - 3 ||
//     index === arr.length - 4
//   ) {
//     return;
//   }

//   numbers.sum += element;
//   numbers.product *= element;
//   numbers.difference -= element;
//   numbers.quotient /= element;
// });

// console.log(numbers);

for (let i = 1; i < arr.length - 4; i++) {
  numbers.sum += arr[i];
  numbers.product *= arr[i];
  numbers.difference -= arr[i];
  numbers.quotient /= arr[i];
}

console.log(numbers);
