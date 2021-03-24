const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // проверяем additionSeparator
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  // проверяем addition
  let additionStr = ''
  if (options.addition !== undefined) {
    let addition = ''+options.addition;
    additionStr = addition.concat(options.additionSeparator)
  }
  // проверяем additionRepeatTimes
  let additionStrRepeated = additionStr

  if (options.additionRepeatTimes !== undefined) {
    if (Number.isInteger(options.additionRepeatTimes)) {
      additionStrRepeated = additionStr.repeat(options.additionRepeatTimes);
    }
  }
  let additionStrRepeatedSliced = additionStrRepeated.slice(0, additionStrRepeated.length - options.additionSeparator.length)

  // проверяем separator 
  if (options.separator === undefined) {
    options.separator = '+'
  }
  // проверяем строку 
  let newStr = ''
  if (str !== undefined) {
    newStr = (''+str).concat(additionStrRepeatedSliced.concat(options.separator))
  }
  // проверяем repeatTimes
  let newStrRepeated = newStr

  if (options.repeatTimes !== undefined) {
    if (Number.isInteger(options.repeatTimes)) {
      newStrRepeated = newStr.repeat(options.repeatTimes)
    }
  }

  // возвращаем из функции
  newStrRepeatedSliced = newStrRepeated.slice(0, newStrRepeated.length - options.separator.length)
  return newStrRepeatedSliced;
}