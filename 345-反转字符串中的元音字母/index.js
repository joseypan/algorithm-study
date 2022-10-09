/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const list = ["a", "e", "i", "o", "u"];
  const arr = Array.from(s);
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (endIndex > startIndex) {
    const startLetter = arr[startIndex].toLowerCase();
    const endLetter = arr[endIndex].toLowerCase();
    if (list.includes(startLetter) && list.includes(endLetter)) {
      //交换两个数
      const temp = arr[startIndex];
      arr[startIndex] = arr[endIndex];
      arr[endIndex] = temp;
      startIndex++;
      endIndex--;
    } else if (list.includes(startLetter)) {
      endIndex--;
    } else if (list.includes(endLetter)) {
      startIndex++;
    } else {
      startIndex++;
      endIndex--;
    }
  }
  return arr.join("");
};
const s = "leetcode";
const result = reverseVowels(s);
console.log("result", result);
