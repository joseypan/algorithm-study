// 【分析】
// 1、这道题其实就是要判断两个字符串中的所有字母是否出现次数一致，若出现次数一致则返回true否则返回false
// 2、能想到的就是先判断两个字符串的长度是否一致，若长度都不一致肯定是false
// 3、判断了长度一致之后，肯定是要遍历了，这里可以采用索引的方式。由于该题又涉及到查找，所以得考虑用Map
// 4、对公共逻辑进行抽取处理
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const length = s.length;
  const map = new Map();
  for (let i = 0; i < length; i++) {
    setItemCount(map, s[i], "s");
    setItemCount(map, t[i], "t");
  }
  for (let item of map.values()) {
    if (!item.s || !item.t || item.s !== item.t) return false;
  }
  return true;
};
function setItemCount(map, key, type) {
  let item = map.get(key);
  if (item && item[type]) {
    item[type] = item[type] + 1;
  } else {
    item = { ...item, [type]: 1 };
  }
  map.set(key, item);
}
let s = "anagram",
  t = "nagaram";
isAnagram(s, t);
