function arithmeticFinder(a, b) {
  const sum = a + b;

  const difference = a - b;

  const product = a * b;

  const quotient = a / b;

  const result = `
  Нийлбэр: ${a} + ${b} = ${sum};

  Ялгавар: ${a} - ${b} = ${difference};

  Үржвэр: ${a} * ${b} = ${product};

  Ноогдвор: ${a} / ${b} = ${quotient.toFixed(2)}; 
  
  `;

  return result;
}

console.log(arithmeticFinder(15, 21));
