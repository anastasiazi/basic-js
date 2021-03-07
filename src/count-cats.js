const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;

  if ( backyard === undefined || backyard.length === 0) {
    return result;
  } 

  for ( i = 0; i < backyard.length; i++ ) {
    for ( j = 0; j < (backyard[i]).length; j++ ) {
      if ( backyard[i][j] === '^^' ) {
        result++;
      }
    }
  }

  return result;
};
