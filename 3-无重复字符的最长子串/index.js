/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let collectedList = [];
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    // 需要判断当前字符在collectedList中是否存在，若存在则需要比较length和maxCount的大小
    const index = collectedList.indexOf(s[i]);
    if (index === -1) {
      collectedList.push(s[i]);
    } else {
      // 需要把index一直到之前的数据清空
      maxCount = Math.max(maxCount, collectedList.length);
      collectedList = collectedList.slice(index + 1);
      collectedList.push(s[i]);
    }
  }
  return Math.max(maxCount, collectedList.length);
};

const result = lengthOfLongestSubstring("au");
console.log("result", result);
