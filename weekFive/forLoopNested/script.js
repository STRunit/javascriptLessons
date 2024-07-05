// 2D Array - н мөрийн тоог оруулан нийлбэрийг олно...

function specifiedRow(array, rowIndex) {
  let totalSum = 0;
  if (rowIndex >= 0 && rowIndex < array.length) {
    for (let i = 0; i < array[rowIndex].length; i++) {
      totalSum += array[rowIndex][i];
    }
  } else {
    return `Ийм мөр байхгүй байна !`;
  }
  return totalSum;
}

const myArray = [
  [7, 14, 34],
  [2, 21, 98],
  [13, 48, 46],
];

console.log(specifiedRow(myArray, 1));
