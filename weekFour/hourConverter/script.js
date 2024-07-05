function hourConverter(hours) {
  const hour = hours % 24;

  const days = (hours - hour) / 24;

  if (hour === 0) {
    return `${days} Өдөр`;
  } else if (days === 0) {
    return `${hours} Цаг`;
  }
  return `${days} Өдөр, ${hour} Цаг`;
}

console.log(hourConverter(10021));
