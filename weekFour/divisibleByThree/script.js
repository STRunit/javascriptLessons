function divisible(number) {
  const answer = number / 3;

  if (number % 3 === 0) {
    return `'${number}' нь 3 - т үлдэгдэлгүй хуваагдана. (Хариу нь = ${answer})`;
  } else if (number % 3 > 0) {
    return `'${number}' нь 3 - т үлдэгдэлтэй хуваагдана. (Хариу нь = ${answer.toFixed(
      2
    )})`;
  }
}

console.log(divisible(24));
