/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let index = 1;
  while (index * index <= x) {
    index++;
  }
  return index - 1;
};
//由于不知道其平方根是什么，所以只能循环当某个数的的乘积大于目标数的时候，知道开平方一定是小于这个数的，又因为只保留整数部分，所以可以index-1。但是这个执行效果并不好
