// Талбай болон хүрээний уртыг олох функц

function calculator(a, b) {
  const square = a * b;
  const perimeter = (a + b) * 2;
  const answer = `Талбай: ${square}, Хүрээний Урт: ${perimeter}`;
  return answer;
}

console.log(calculator(21, 13));
