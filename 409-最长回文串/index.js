// 【分析】
// 1、这道题是要构造出回文字符串-->重点在于构造（其实可以换个思路，只要某个字母出现的次数是2的倍数+一个次数为1的字母）就可以构造一个回文字符串
// 2、先统计每个字母出现的次数，再遍历这个统计的map看一下最终可以组成长度为多少的
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const count = map.get(s[i]);
      map.set(s[i], count + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  // 遍历这个map结构，判断每一项的值是不是2的倍数
  let times = 0;
  let flag = 0;
  map.forEach((ele) => {
    //判断是不是有落单的数
    if (ele % 2 !== 0) {
      flag = 1;
    }
    times += parseInt(ele / 2) * 2;
  });
  return times + flag;
};
longestPalindrome("abccccdd");
