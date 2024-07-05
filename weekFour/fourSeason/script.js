function seasonFinder(month) {
  if (month === 12 || month === 1 || month === 2) {
    return "Өвөл";
  } else if (month === 3 || month === 4 || month === 5) {
    return "Хавар";
  } else if (month === 6 || month === 7 || month === 8) {
    return "Зун";
  } else if (month === 9 || month === 10 || month === 11) {
    return "Намар";
  }

  return "Уучлаарай буруу сар оруулсан байна !";
}
console.log(seasonFinder(12));
