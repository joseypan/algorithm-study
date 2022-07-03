/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastLength = 0;
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      length = 0;
    } else {
      length++;
      lastLength = length;
    }
  }
  return lastLength;
};
lengthOfLastWord("   fly me   to   the moon  ");
