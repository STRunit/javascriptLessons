const fruits = ["Apple", "Banana", "Cherry", "Date"];

// Exercise 1

console.log("Exercise 1 => Logged fruits array", fruits);

// Exercise 2

console.log(
  `Exercise 2 => First element is - ${fruits[0]}, Third element is - ${fruits[2]}`
);

// Exercise 3

fruits.push("Elderberry");

fruits[1] = "Blueberry";

console.log(
  "Exercise 3 => Added Elderberry and changed second element to Blueberry",
  fruits
);

// Exercise 4

for (let i = 0; i < fruits.length; i++) {
  console.log("Exercise 4 => Logged fruit names - ", fruits[i]);
}

// Exercise 5

const values = Object.values(fruits);
const keys = Object.keys(fruits);
const result = [];

values.map((element, index) => {
  const toUpperCase = (fruits[keys[index]] = element.toUpperCase());
  result.push(toUpperCase);
});

console.log("Exercise 5 => Transformed to UPPERCASE", result);

// Exercise 6

const students = [
  ["John", 17, [84, 86, 79]],
  ["Sara", 16, [88, 93, 91]],
  ["Amber", 18, [81, 88, 94]],
  ["David", 19, [93, 82, 78]],
];

students[0][2][0] = 95;
students[0][0] = "Jane";

console.log(
  "Exercise 6 => Changed Math grade to 95 and, changed John to Jane",
  students[0]
);

// Exercise 7

students.forEach((student) => {
  console.log("Exercise 7.1 => Students Name - ", student[0]);
});

students.map((student) => {
  console.log(
    `Exercise 7.2 => Current Age ${student[1]} + 1 = `,
    student[1] + 1
  );
});

// Exercise 8

const plus90Students = [];

students.filter((element, index) => {
  if (element[2][0] > 90) {
    plus90Students.push(students[index]);
  }
});

console.log("Exercise 8 => Students with +90 in Math ", plus90Students);

// Exercise 9

const newStudent = ["Doe", 22, [85, 87, 90]];

students.push(newStudent);

console.log("Exercise 9 => Added Doe ", students);

newStudent.splice(2, 1);

console.log("Exercise 9 => Removed Doe Grades ", students);
