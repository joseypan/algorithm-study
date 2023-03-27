/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  // 因为说了不能改变其相对位置，所以要用双指针来表示
  let sIndex = 0;
  let tIndex = 0;
  const list = [];
  while (sIndex < s.length && tIndex < t.length) {
    if (t[tIndex] === s[sIndex]) {
      list.push(t[tIndex]);
      sIndex++;
    }
    tIndex++;
  }
  return list.join("") === s;
};
const result = isSubsequence("abc", "ahbgdc");
console.log("result", result);
