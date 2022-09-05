// 【分析】
// 1、这道题其实就是类似于正则匹配，首先我们需要对字符串进行分组，这道题提示我们说单词都是由空格分隔开的
// 最先想到的点是将字符串转成数组，然后再用一个petternMap结构进行统计，若出现有且不相等的情况直接就返回false
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const list = s.split(" ");
  const petternMap = new Map();
  const listMap = new Map();
  if (pattern.length !== list.length) return false;
  let index = 0;
  while (index < pattern.length) {
    if (
      (petternMap.has(pattern[index]) &&
        petternMap.get(pattern[index]) !== list[index]) ||
      (listMap.has(list[index]) && listMap.get(list[index]) !== pattern[index])
    )
      return false;
    petternMap.set(pattern[index], list[index]);
    listMap.set(list[index], pattern[index]);
    index++;
  }
  return true;
};
