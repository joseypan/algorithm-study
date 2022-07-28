/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //首先需要把字符串中的符号进行去除，或者是双指针，遇到特殊符号跳过
  let startIndex = 0;
  let endIndex = s.length - 1;
  const reg = /[a-z]|[A-Z]|\d/;
  while (endIndex > startIndex) {
    if (!reg.test(s[startIndex])) {
      startIndex++;
    } else if (!reg.test(s[endIndex])) {
      endIndex--;
    } else {
      const startStr = s[startIndex].toLocaleLowerCase();
      const endStr = s[endIndex].toLocaleLowerCase();
      if (startStr !== endStr) return false;
      startIndex++;
      endIndex--;
    }
  }
  return true;
};
let result = isPalindrome("A man, a plan, a canal: Panama");
console.log("result", result);
