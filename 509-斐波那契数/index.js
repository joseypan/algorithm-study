/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // // 最常见的做法就是递归做法
  // if (n === 0) return 0;
  // if (n === 1) return 1;
  // return fib(n - 1) + fib(n - 2);
  // 优化前：
  // const sumList = [];
  // let curNum = 0;
  // while (curNum <= n) {
  //   if (curNum === 0) {
  //     sumList.push(0);
  //   } else if (curNum === 1) {
  //     sumList.push(1);
  //   } else {
  //     const sum = sumList[curNum - 1] + sumList[curNum - 2];
  //     sumList.push(sum);
  //   }
  //   curNum++;
  // }
  // return sumList[sumList.length - 1];
  // 优化后：
  if (n === 0) return 0;
  if (n === 1) return 1;
  let firstNum = 0;
  let scondNum = 1;
  let curNum = 2;
  let sum = 0;
  while (curNum <= n) {
    sum = firstNum + scondNum;
    firstNum = scondNum;
    scondNum = sum;
    curNum++;
  }
  return sum;
};
