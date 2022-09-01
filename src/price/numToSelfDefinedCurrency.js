/**
 * 
 * @desc 将数字参数转换为自定义为单位的字符串
 * @param  {Number}  num
 * @param  {String}  priceUnit  
 * @return {String} 
 */
 function numToSelfDefinedCurrency(num, priceUnit) {
	return priceUnit + num.toFixed(2);
}

module.exports = numToSelfDefinedCurrency;