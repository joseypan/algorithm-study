//题解一：通过遍历字符串的方式
/**
 * @param {number} x
 * @return {boolean}
 */
//var isPalindrome = function (x) {
//let str = String(x);
//let length = str.length;
//if (length === 1) {
//return true;
//}
////遍历i判断i与x.length-1-i是不是相等的
//for (let i = 0; i < length; i++) {
//if (str[i] !== str[length - 1 - i]) {
//return false;
//}
//}
//return true;
//};

//题解二：通过题解思考既然是回文数，那么数字翻转之后一定等于原数
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reverseNumber = 0;
  let index = 0;
  const length = String(x).length;
  const originalData = x;
  while (index < length) {
    reverseNumber = reverseNumber * 10 + (x % 10);
    index++;
    x = Math.floor(x / 10);
  }
  return originalData === reverseNumber;
};
isPalindrome(121);
//优化，不用完全遍历，使用x>reverseNumber作为遍历的结束条件，说明已经遍历超过中间位置了
/**
 * @param {number} x
 * @return {boolean}
 */
//var isPalindrome = function (x) {
//if (x < 0 || (x % 10 === 0 && x !== 0)) {
//return false;
//}
//let reverseNumber = 0;
//while (x > reverseNumber) {
//reverseNumber = reverseNumber * 10 + (x % 10);
//x = Math.floor(x / 10);
//}
//return x === reverseNumber || x === Math.floor(reverseNumber / 10);
//};
