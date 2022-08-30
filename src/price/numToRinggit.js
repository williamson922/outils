/**
 * 
 * @desc 将数字参数转换为令吉为单位的字符串
 * @param  {Number}  num
 * @return {String} 
 */
 function numToRinggit(num) {
	return "RM" + num.toFixed(2);
}

module.exports = numToRinggit;