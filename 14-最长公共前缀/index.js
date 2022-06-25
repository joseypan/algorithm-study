//【分析】
//1、应该优先遍历第一个字符串，然后使用一个变量进行存储，然后遍历后面的字符串是否以此开头，若以此开头则表示是公共的，否则直接返回出去
//这种方式运行速度太慢了。。。需要再次思考
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  console.log(1111);
  //如果只有一项，则直接返回第一个字符串
  if (strs.length === 1 || strs[0] === "") return strs[0];
  let commonStr = "";
  console.log(strs[0].length);
  for (let i = 0; i < strs[0].length; i++) {
    console.log(strs[0][i]);
    for (let j = 1; j < strs.length; j++) {
      console.log(strs[j], commonStr);
      if (!strs[j].startsWith(commonStr + strs[0][i])) {
        return commonStr;
      }
    }
    commonStr += strs[0][i];
  }
  return commonStr;
};
//换一种思路，其实可以比较每一位是不是相等，当前位都相等再进行字符串的拼接，不相等则直接返回
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1 || strs[0] === "") return strs[0];
  let commonStr = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return commonStr;
    }
    commonStr += strs[0][i];
  }
  return commonStr;
};
longestCommonPrefix(["flower", "flower", "flower", "flower"]);
