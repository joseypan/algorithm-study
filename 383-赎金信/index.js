/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 如果说不考虑特殊情况下，使用magazine.includes是最方便的方式，但是不一定是连续的，且顺序也是不保证的
  // 目前想到的思路是使用Map对magazine的所有字符进行收集，统计其字符类型和数量，最后再遍历ransomNote看是否满足，那么复杂度会是m+n
  const magazineMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    if (magazineMap.has(magazine[i])) {
      const count = magazineMap.get(magazine[i]);
      magazineMap.set(magazine[i], count + 1);
    } else {
      magazineMap.set(magazine[i], 1);
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazineMap.get(ransomNote[i])) {
      //这种包含undefined和0
      return false;
    } else {
      const count = magazineMap.get(ransomNote[i]);
      magazineMap.set(ransomNote[i], count - 1);
    }
  }
  return true;
};
