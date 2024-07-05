function maxNumberFinder(a, b, c) {
  if (a > b && a > c) {
    if (b > c) {
      return `A:${a} > B:${b} > C:${c}`;
    } else {
      return `A:${a} > C:${c} > B:${b}`;
    }
  } else if (b > a && b > c) {
    if (a > c) {
      return `B:${b} > A:${a} > C:${c}`;
    } else {
      return `B:${b} > C:${c} > A:${a}`;
    }
  } else {
    if (a > b) {
      return `C:${c} > A:${a} > B:${b}`;
    } else {
      return `C:${c} > B:${b} > ${a}`;
    }
  }
}

console.log(maxNumberFinder(21, 15, 13));
