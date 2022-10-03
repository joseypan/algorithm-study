// 【分析】
// 1、这道题传入一个数字n,代表的是有2^n个数，并且是从0开始的数，也就是大小从0-2^n-1
// 2、第一个数为0是已经确定的事情
// 3、因为这道题和顺序有关，所以又是一道排列题
// 4、但是这个排列有一定的规则，当前位的数对应二进制位和前一个二进制位只有一位相差1
// 5、并且要求最后一位和第一位也只相差1
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = [];
  const addedList = new Array(Math.pow(2, n)).fill(false);
  const path = [];
  backtracking(n, addedList, result, path);
  return result; //只要输出一组即可
};
const backtracking = (n, addedList, result, path) => {
  if (path.length === Math.power(2, n)) {
    result.push([...path]);
    return;
  }
  for (let i = 0; i < Math.pow(2, n); i++) {
    if (addedList[i] === false) {
      addedList[i] = true;
      path.push(Math.pow(2, n) - 1);
      backtracking(n, addedList, result, path);
      addedList[i] = false;
      path.pop();
    }
  }
};
grayCode(3);
