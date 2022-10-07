/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const middleIndex = Math.ceil((s.length - 1) / 2);
  let index = 0;
  while (index < middleIndex) {
    if (index === 14)
      console.log("index", index, s[index], s.length - 1 - index);
    let temp = s[index];
    s[index] = s[s.length - 1 - index];
    s[s.length - 1 - index] = temp;
    index++;
  }
};
let s = [
  "A",
  " ",
  "m",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "p",
  "l",
  "a",
  "n",
  ",",
  " ",
  "a",
  " ",
  "c",
  "a",
  "n",
  "a",
  "l",
  ":",
  " ",
  "P",
  "a",
  "n",
  "a",
  "m",
  "a",
];
reverseString(s);
console.log("s", s);
