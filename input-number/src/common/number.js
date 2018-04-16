function isValueNumber (value) {
  var reg = /^[0-9]+.?[0-9]*$/
  if (reg.test(value)) {
    return true
  }
  return false
  // return (/(^-?[0-9]+\.{1}\d)+$)| (^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '')
}
export {
  isValueNumber
}
