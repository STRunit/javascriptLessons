const person = {
  firstName: "Shijirbaatar",
  lastName: "Bold",
  age: "28",
  city: "Zavkhan",
};

// Exercise 1 ↓

console.log("Exercise 1 => ", person);

// Exercise 2 ↓

console.log(
  "Exercise 2 => ",
  "firstName: ",
  person.firstName,
  ", ",
  "city: ",
  person.city
);

// Exercise 3 ↓

person.email = "st21unit@gmail.com";

person.city = "Ulaanbaatar";

console.log("Exercise 3 => ", person);

// // Exercise 4 ↓

const student = {
  name: "Shijirbaatar",
  age: "28",
  grades: [
    {
      math: 80,
    },
    {
      science: 80,
    },
    {
      history: 80,
    },
  ],
  address: [
    {
      street: "Zaluuchuud street",
    },
    {
      city: "Zavkhan",
    },
    {
      zip: "81099",
    },
  ],
};

student.grades[0].math = 95;

student.address[1].city = "Ulaanbaatar";

console.log("Exercise 4 => ", student);

//Exercise 5 ↓

console.log("Exercise 5 Property names => ", Object.keys(student));

console.log("Exercise 5 Property values => ", Object.values(student));

// Exercise 6 ↓

student.email = "st21unit@gmail.com";

// student.address.pop();

// OR

student.address.splice(2, 1);

console.log("Exercise 6 => ", student);
