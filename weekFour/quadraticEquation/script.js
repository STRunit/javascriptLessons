function quadraticEquation(a, b, c) {
  const d = b * b - 4 * a * c;

  let x1;

  let x2;

  if (a === 0) {
    return `Тэгшитгэл хүчингүй`;
  } else if (d > 0) {
    x1 = (-b - Math.sqrt(d)) / (2 * a);

    x2 = (-b + Math.sqrt(d)) / (2 * a);

    return `x1 = ${x1.toFixed(1)} , x2 = ${x2.toFixed(1)}`;
  } else if (d === 0) {
    x1 = -b / (2 * a);

    x2 = -b / (2 * a);

    return `x1 & x2 = ${x1.toFixed(1)}`;
  } else if (d < 0) {
    return `Бодит язгуур байхгүй`;
  }
}

console.log(quadraticEquation(3, 21, 5));
