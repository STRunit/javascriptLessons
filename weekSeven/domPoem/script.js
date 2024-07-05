const body = document.getElementsByTagName("body")[0];

//2D array
const poem = [
  ["Хорвоогийн ", "хүчирхэг ", "амьтан ", "хүн "],
  ["Хосгүй ", "хөгжилт ", "ухаан ", "сэтгэхүйт ", "хүн "],
];

//Span үүсгэдэг функц нээсэн
const createSpanElement = (word) => {
  const span = document.createElement("span");
  span.innerText = word;

  return span;
};

const createPoemLine = (line) => {
  //Span - аа хийх poemLine нэртэй div нээсэн
  const poemLine = document.createElement("div");
  // Давталтаар шүлгийн мөр тус бүрт span буюу үг үүсгэдэг функц ажилласан
  for (let i = 0; i < line.length; i++) {
    poemLine.appendChild(createSpanElement(line[i]));
  }
  // Шүлгийнхээ мөрийг body - руу хавсаргасан
  body.appendChild(poemLine);
};
// Давталтаар шүлгийн мөрийг үүсгэдэг функцээ ажиллуулсан
for (let i = 0; i < poem.length; i++) {
  createPoemLine(poem[i]);
}
