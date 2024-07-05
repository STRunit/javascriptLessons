function weekendFinder(day) {
  const dayOfWeek = day % 7;

  if (day > 31 || !Number.isInteger(day) || day <= 0) {
    return `Уучлаарай буруу өдөр оруулсан байна.`;
  } else if (dayOfWeek === 1) {
    return `Даваа гараг`;
  } else if (dayOfWeek === 2) {
    return `Мягмар гараг`;
  } else if (dayOfWeek === 3) {
    return `Лхагва гараг`;
  } else if (dayOfWeek === 4) {
    return `Пүрэв гараг`;
  } else if (dayOfWeek === 5) {
    return `Баасан гараг`;
  } else if (dayOfWeek === 6) {
    return `Бямба гараг`;
  } else if (dayOfWeek === 7 || dayOfWeek % 7 === 0) {
    return `Ням гараг`;
  }

  return dayOfWeek;
}

console.log(weekendFinder(28));
