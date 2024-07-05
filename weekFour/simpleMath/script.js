function mathResult(a, b) {
  const formula = Math.pow(a, 2) + Math.pow(b, 2) - a * b;

  return `
  (a² + b²) - (a * b) = (${Math.pow(a, 2)} + ${Math.pow(b, 2)}) - (${a} * ${b})
  
  Хариу: ${Math.round(formula)}
  `;
}

console.log(mathResult(10, 14));
