const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error;
  }

  if (array === undefined || array.length === 0) {
    return [];
  }
  let newArray = [];


  for (i = 0; i < array.length; i++) {
    if (array[i] === '--double-next') {
      if (i < array.length - 1) {
        newArray.push(array[i + 1]);
      }
    } else if (array[i] === '--double-prev') {
      if (i !== 0) {
        if (i > 1 && array[i - 2] === '--discard-next') {
          continue;
        }
        newArray.push(array[i - 1]);

      }
    } else if (array[i] === '--discard-next') {
      if (i < array.length - 1) {
        i++
      }
    } else if (array[i] === '--discard-prev') {
      if (i !== 0) {
        if (i > 1 && array[i - 2] === '--discard-next') {
          continue;
        }
        newArray.pop()
      }
    } else {
      newArray.push(array[i])
    }
  }
  return newArray;
};
