const addEvenNumber = (arr) => {
  let result = 0;
  arr.forEach((number) => {
    if (number % 2 === 0) result = result + number;
  });

  return result;
};
