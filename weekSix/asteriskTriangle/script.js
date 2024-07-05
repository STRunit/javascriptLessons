// // --------- upper left triangle -------------

// for (let i = 0; i < 5; i++) {
//   let iteration = "";

//   for (let j = 0; j <= i; j++) {
//     iteration += " * ";
//   }
//   console.log(iteration);
// }

// // --------- lower left triangle -------------

// for (let i = 5; i >= 0; i--) {
//   let iteration = "";

//   for (let j = 0; j <= i; j++) {
//     iteration += " * ";
//   }
//   console.log(iteration);
// }

// // --------- upper right triangle ------------

// for (let i = 1; i <= 5; i++) {
//   let iteration = "";
//   for (let j = 1; j <= 5; j++) {
//     if (j <= 5 - i) {
//       iteration += "   ";
//     } else {
//       iteration += " * ";
//     }
//   }
//   console.log(iteration);
// }

// // --------- lower right triangle ------------

// for (let i = 5; i >= 1; i--) {
//   let iteration = "";

//   for (let j = 1; j <= 5; j++) {
//     if (j <= 5 - i) {
//       iteration += "   ";
//     } else {
//       iteration += " * ";
//     }
//   }
//   console.log(iteration);
// }

// // --------- pyramid triangle -----------

// for (let i = 0; i <= 5; i++) {
//   let iteration = "";
//   for (let j = 0; j <= 9; j++) {
//     if (j <= 5 - i || j >= 5 + i) {
//       iteration += "   ";
//     } else {
//       iteration += " * ";
//     }
//   }
//   console.log(iteration);
// }
