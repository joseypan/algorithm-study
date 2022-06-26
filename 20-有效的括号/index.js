/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const map = new Map();
  map.set(")", "(");
  map.set("]", "[");
  map.set("}", "{");
  const list = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      list.push(s[i]);
    } else {
      if (map.get(s[i]) === list[list.length - 1]) {
        list.pop();
      } else {
        list.push(s[i]);
      }
    }
  }
  return list.length === 0;
};
let result = isValid("([}}])");
