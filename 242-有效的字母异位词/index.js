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

// var isAnagram = function (s, t) {
//   const map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     let count = 0;
//     if (map.has(s[i])) {
//       count = map.get(s[i]);
//     }
//     map.set(s[i], count + 1);
//   }
//   for (let i = 0; i < t.length; i++) {
//     if (map.has(t[i])) {
//       count = map.get(t[i]);
//       if (count - 1 === 0) {
//         // 说明这个元素可以删除了
//         map.delete(t[i]);
//       } else {
//         map.set(t[i], count - 1);
//       }
//     } else {
//       // 出现了s中没有的字符，直接返回false
//       return false;
//     }
//   }
//   return map.size === 0 ? true : false;
// };
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const map = new Map();
//   let index = 0;
//   while (index < s.length) {
//     // 主要思路是s的字符用来存值，t的字符用来取值
//     if (map.has(s[index])) {
//       // 存在则存值
//       const count = map.get(s[index]);
//       if (count + 1 === 0) {
//         map.delete(s[index]);
//       } else {
//         map.set(s[index], count + 1);
//       }
//     } else {
//       map.set(s[index], 1);
//     }
//     if (map.has(t[index])) {
//       const count = map.get(t[index]);
//       if (count - 1 === 0) {
//         map.delete(t[index]);
//       } else {
//         map.set(t[index], count - 1);
//       }
//     } else {
//       map.set(t[index], -1);
//     }
//     index++;
//   }
//   return map.size === 0;
// };

// 重点就是一加一减去抵消

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const base = "a".charCodeAt();
  const resSet = new Array(26).fill(0);
  for (const i of s) {
    resSet[i.charCodeAt() - base]++;
  }
  for (const i of t) {
    if (!resSet[i.charCodeAt() - base]) return false;
    resSet[i.charCodeAt() - base]--;
  }
  return true;
};
