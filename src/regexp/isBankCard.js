/**
 * 
 * @desc Determine whether the numbers are bank card
 * @param {String|Number} str
 * @return {Boolean}
 */

function isBankCard(str){
    if(isNaN(str) && str.length!==16)
        return false;
    else
        return true;
}
module.exports= isBankCard