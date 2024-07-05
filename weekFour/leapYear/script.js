function leapYear(year) {
  if (!Number.isInteger(year) || year <= 0) {
    return `Та бүхэл эсвэл зөвхөн эерэг тоон утга оруулна уу !`;
  } else if (year % 4 === 0) {
    return `${year} он нь өндөр жил байна.`;
  } else if (year % 4 > 0) {
    return `${year} он нь нам жил байна.`;
  }
  return `Таны оруулсан он буруу байх шиг байна даа.`;
}

console.log(leapYear(1244));
