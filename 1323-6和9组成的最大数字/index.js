/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  // 如果是字符串的话，直接遍历字符串然后将第一个6替换成9就可以了
  // 顺着这个思路可以将num转成str
  const strList = String(num).split("");
  for (let i = 0; i < strList.length; i++) {
    if (strList[i] === "6") {
      strList[i] = "9";
      break;
    }
  }
  return Number(strList.join(""));
  // 上面的思路虽然可以解决这个问题，但显然不是合适的方式。我们可以考虑数字6和数字9在二进制中的表现
  // 数字6: 00000110
  // 数字9：00001001
  // 并且要使得最大，一定是位数最高的6转成9
  // 好像也没有啥思路
};
