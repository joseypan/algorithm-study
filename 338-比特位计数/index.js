/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const list = [];
  for (let i = 0; i <= n; i++) {
    const count = calculateCount(i);
    list.push(count);
  }
  return list;
};
const calculateCount = (n) => {
  let count = 0;
  while (n !== 0) {
    if (n & 1) count++;
    n = n >> 1;
  }
  return count;
};
const result = calculateCount(7); //00000101
console.log("result", result);
