function backWards(text) {
  let reverser = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverser += text[i];
  }

  return reverser;
}

console.log(backWards("Shijirbaatar"));
