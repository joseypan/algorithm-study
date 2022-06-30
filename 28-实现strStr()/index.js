/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;
  //需要用两个变量分别代表haystack的索引和needle的索引
  let startIndex = -1;
  //需要对应索引进行比对
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const str = haystack.slice(i, i + needle.length);
      if (str === needle) {
        startIndex = i;
        break;
      }
    }
  }
  return startIndex;
};
