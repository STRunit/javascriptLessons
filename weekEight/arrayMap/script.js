// // ---------- Array map --------------

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((element) => {
//   return element + "Hello";
// });

// console.log(newArr);

// // ---------- Array map with string and number --------------

// const data = ["a", "b", "c", 1, 2, 3];

// const dataResult = data.map((element) => {
//   if (typeof element === "string") {
//     return element + "Hello";
//   } else {
//     return element * 10;
//   }
// });

// console.log(dataResult);

// // ---------- Array map separate string and number -----------

const data = ["a", "b", "c", 1, 2, 3];

const string = [];
const number = [];

data.map((element) => {
  if (typeof element === "string") {
    string.push(element);
  } else {
    number.push(element);
  }
});

console.log(string);
console.log(number);
