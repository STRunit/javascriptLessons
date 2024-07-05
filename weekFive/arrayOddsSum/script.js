const arr = [5, 9, 3, 15, 20, 32];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    sum += arr[i];
    console.log(`Сондгой Тоонууд: ${arr[i]}`);
  }
}
console.log(`Нийлбэр: ${sum}`);

// Make Function on this !
