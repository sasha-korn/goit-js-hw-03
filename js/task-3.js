function filterArray(numbers, value) {
  const resultArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    // console.log("numbers[i]", numbers[i]);
    if (numbers[i] > value) {
      resultArray.push(numbers[i]);
      //   console.log(">value", numbers[i]);
    }
    // console.log("resultArray", resultArray);
  }
  return resultArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
