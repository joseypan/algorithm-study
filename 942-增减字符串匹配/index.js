/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  // 如果是I则说明后一个比前一个大，如果是D则说明后一个比前一个小
  // 首先根据s的长度可以构建一个数组，然后需要对数组进行排序
  let minCount = 0;
  let maxCount = s.length;
  const list = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      list.push(minCount);
      minCount++;
    } else {
      list.push(maxCount);
      maxCount--;
    }
  }
  //最后还会剩一位数
  list.push(minCount);
  return list;
};
