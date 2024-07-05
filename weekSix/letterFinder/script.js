const English = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Mongolia = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "ө",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ү",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];

function letterFinder(array, value) {
  for (let i = 0; i <= array.length; i++) {
    if (value == i) {
      return `${array[i - 1]} үсэг`;
    } else if (value == array[i]) {
      return `${i + 1} - р үсэг`;
    }
  }
}
console.log(letterFinder(Mongolia, "я"));

// // Letter Finder with Instruction

// function letterFinder(array, value) {
//   //array, value гэсэн 2 parameter зарласнаар Англи болон Монгол үсгийг нэг function - д багтаах боломжтой болно.

//   for (let i = 0; i <= array.length; i++) {
//     if (value == i) {
//       return array[i - 1]; // i буюу index тэгээс эхэлж байгаа учраас өгөгдсөн тооны харалдаах үсгийг тэнцүүлэхийн тулд array[i - 1] утга авна. Энэ if нөхцөл нь тоо өгөхөд харгалзах үсгийг хэвлэнэ.
//     } else if (value == array[i]) {
//       return i + 1; // Мөн i буюу index тэгээс эхэлж байгаа учраас өгөгдсөн үсэгний харалдаах тоог тэнцүүлэхийн тулд i + 1 утга авна. Харин энэ if нөхцөл нь үсэг өгөхөд харгалзах тоог хэвлэнэ.
//     }
//   }
// }

// console.log(letterFinder(English, 26)); // English эсвэл Mongolia гэсэн array - аа аль нэгийг нь сонгоод таслалын ардаас үсэг эсвэл тоогоо оруулна. Үсэг бичихдээ " " дотор бичихээ мартав аа.
