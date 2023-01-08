/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let flag = true;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === s[i] && j !== i) {
        //不符合要求直接break本次循环
        flag = false;
        break;
      }
    }
    if (flag === true) return i;
  }
  return -1;
};
