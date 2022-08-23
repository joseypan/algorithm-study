/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let index = 0;
  const map = new Map();
  const length = s.length;
  const addedList = [];
  while (index < length) {
    if (
      (map.get(s[index]) && map.get(s[index]) !== t[index]) ||
      (!map.get(s[index]) && addedList.includes(t[index]))
    ) {
      return false;
    }
    map.set(s[index], t[index]);
    addedList.push(t[index]);
    index++;
  }
  return true;
};
