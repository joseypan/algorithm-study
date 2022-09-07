// 【分析】
// 1、这道题是需要判断某个字符串中的字母是不是都是大小写配对的，只有所有字母都满足的时候才能称为美好子字符串
// 2、那么这个字符串一定满足以下几个特点
//  大小写需要相邻才能算作
// 需要获取最长的字符串
// 3、既然是长度最长，那么一定是要进行比较的
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
  // 初始是空字符串，需要根据这个字符串进行替换
  let resStr = "";
  // 用来做字符串拼接的
  let wordList = [];
  for (let i = 0; i < s.length; i++) {
    const upperCaseWord = s[i].toUpperCase();
    const lowerCaseWord = s[i].toLocaleLowerCase();
    // 用来判断当前项的和下一项是否是大小对应关系，若对应则满足要求
    const lastEle = wordList[wordList.length - 1];
    if (
      (lastEle == upperCaseWord || lastEle === lowerCaseWord) &&
      s[i] !== lastEle
    ) {
      wordList.push(s[i]);
    }
  }

  return resStr;
};
