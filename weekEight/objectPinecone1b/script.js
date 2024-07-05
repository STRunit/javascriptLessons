// // Object Pinecone 1B

let company = {
  name: "Pinecone",
  location: "Gurvan Gol",
  classes: [
    {
      className: "1a",
      teachers: [
        { name: "Zolboo", position: "master" },
        { name: "Bilguun", position: "master" },
      ],
      students: [
        { name: "student1" },
        { name: "student2" },
        { name: "Munkhgerel" },
        { name: "student4" },
        { name: "student5" },
        { name: "student6" },
        { name: "student7" },
        { name: "student8" },
        { name: "student9" },
        { name: "student10" },
      ],
    },

    {
      className: "1b",
      teachers: [
        { name: "Batmunkh", position: "master" },
        { name: "Bat-Orgil", position: "master" },
      ],
      students: [
        { name: "Khulan", age: 22 },
        { name: "Uyanga", age: 27 },
        { name: "Namuunbaigal", age: 23 },
        { name: "Tsog", age: 24 },
        { name: "Delgersaikhan", age: 23 },
        { name: "Jambaldorj", age: 23 },
        { name: "Batdelger", age: 29 },
        { name: "Shijirbaatar", age: 29 },
        { name: "Bayarbileg", age: 22 },
        { name: "Tuul", age: 24 },
        { name: "Sukhbat", age: 24 },
        { name: "Tserenpuntsag", age: 31 },
        { name: "Ashid", age: 18 },
        { name: "Tamir", age: 23 },
        { name: "Soyolsuren", age: 25 },
      ],
    },
  ],
};

// // ---------- Logging the first and last student name in each class ------------

// console.log(company.classes[0].students[0]);
// console.log(
//   company.classes[0].students[company.classes[0].students.length - 1]
// );
// console.log(company.classes[1].students[0]);
// console.log(
//   company.classes[1].students[company.classes[1].students.length - 1]
// );

// // ---------- Finding average age by for loop method ------------

// const students = company.classes[1].students;

// let totalAge = 0;

// for (let i = 0; i < students.length; i++) {
//   totalAge += students[i].age;
// }

// let averageAge = (totalAge / students.length).toFixed(2);

// console.log(`Average Age of 1B = ${averageAge}`);

// // ----------- Finding average age by array map method -------------

const students = company.classes[1].students;

let totalAge = 0;

students.map((element) => {
  totalAge += element.age;
});

let averageAge = ` Average Age of 1B = ${(totalAge / students.length).toFixed(
  2
)}`;

console.log(averageAge);

// // ----------- Changing the key value in objects / In this case changing my name value below / ------------

// company.classes[1].students[7].name = "Shijirbaatar Bold";

// console.log(company.classes[1].students);
