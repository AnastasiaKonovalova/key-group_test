export const dateGenerator = (date, days) => {
  const startDate = new Date(date);
  const dates = [];
  for (let i = 0; i < days; i++) {
    const newDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
    dates.push(newDate.toDateString());
  }

  return dates;
};

export const getRandomIntegerInDiapason = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
export const dataIncrease = (startArray, step) => {
  return startArray.map(int => int + getRandomIntegerInDiapason(int / 4, int / 2) + step);
};
export const arrayCut = (array, startOffset, endOffset) => {
  return array.map((item, index, arr) => {
    const shouldElementBeCut = index < startOffset || index >= arr.length - endOffset;
    return shouldElementBeCut ? null : item;
  });
};
