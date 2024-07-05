//not finished
const input = document.getElementsByTagName("input")[0];

const log = (text) => {
  if (text === "+" || text === "-" || text === "*" || text === "/") {
    input.value += ` ${text} `;
  } else if (text === "=") {
    const arr = input.value.split(" ");
    const num1 = Number(arr[0]);
    const op = arr[1];
    const num2 = Number(arr[2]);
    if (op === "+") {
      input.value = num1 + num2;
    } else if (op === "-") {
      input.value = num1 - num2;
    } else if (op === "*") {
      input.value = num1 * num2;
    } else if (op === "/") {
      input.value = num1 / num2;
    }
  } else {
    input.value += text;
  }
};
