/**
 * 
 * @desc  判断是否为身份证号
 * @param  {String|Number} str 
 * @return {Boolean}
 */
 function isIC(str) {
  return /^\d{6}\-\d{2}\-\d{4}$/.test(str)
}

module.exports = isIC