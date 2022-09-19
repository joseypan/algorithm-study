// 【分析】
// 1、这道题想要考察的是从字符串中最多删除一个字符之后是否是回文字符串
// 2、要判断是否是回文字符串，其实就是判断i和s[s.length-1-i]是否相等
// 3、只不过这里可以删除一个字符，那就是允许跳过一个字符的比较
// 4、有一个问题是删除是这个字符，是左删还是右删？根据什么判断标准？不同的时候到底是谁跳过？
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // 这道题感觉直接用双指针来做，思路更加清晰
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  let flag = false;
  while (rightIndex > leftIndex) {
    if (s[rightIndex] !== s[leftIndex]) {
      if (flag) return false;
      //说明两个值不相等，考虑是左边跳过一个还是右边跳过一个
      // 这里怎么判断是该跳哪个呢？
      if (
        s[leftIndex + 1] === s[rightIndex] &&
        s[leftIndex] !== s[rightIndex - 1]
      ) {
        leftIndex++;
      } else if (
        s[leftIndex + 1] !== s[rightIndex] &&
        s[leftIndex] === s[rightIndex - 1]
      ) {
        rightIndex--;
      } else if (
        s[leftIndex + 1] === s[rightIndex] &&
        s[leftIndex] === s[rightIndex - 1]
      ) {
        return (
          validPalindrome(s.slice(leftIndex + 1, rightIndex)) ||
          validPalindrome(s.slice(leftIndex, rightIndex - 1))
        );
      }
      flag = true;
    } else {
      leftIndex++;
      rightIndex--;
    }
  }
  return true;
};

const result = validPalindrome("acxcybycxcxa");
console.log("result", result);
