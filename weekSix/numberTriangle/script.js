let num = 1;

for (let i = 0; i < 5; i++) {
  let iteration = "";
  for (let j = 0; j <= i; j++) {
    iteration += num + " ";
    num++;
  }
  console.log(iteration);
}
