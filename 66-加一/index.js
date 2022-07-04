/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 首先需要找到数组中的最后一位，进行加1，然后判断前一位是否可以进位，若不能进位，则直接赋值，若可以进位则需要再次得到新值
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      //当其大于9的时候就要考虑进位问题了
      digits[i] = 0;
      //考虑边界情况，当前索引已经是0了，那么需要在数组unshift一位数了
      if (i === 0 && digits[i] === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
};
// 【分析】
// 主要思路和数学的加法运算一致，满10进一,当进一到第一位的时候进行补位
// 可以考虑扩展不仅仅是 + 1;
