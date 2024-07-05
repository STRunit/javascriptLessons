function verticalLoops(text) {
  for (let i = 0; i <= text.length - 1; i++) {
    console.log(text[i]);
  }

  for (let i = text.length - 1; i >= 0; i--) {
    console.log(text[i]);
  }
}

verticalLoops("Hello World");
