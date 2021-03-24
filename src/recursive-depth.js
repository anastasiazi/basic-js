const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0
    if (Array.isArray(arr)) {
      let maxDepth = 0
      depth++;
      for (let i = 0; i < arr.length; i++) {
        let childDepth = this.calculateDepth(arr[i])
        if (childDepth > maxDepth) {
          maxDepth = childDepth;
        }
      }
      depth += maxDepth
    } return depth
  }
};