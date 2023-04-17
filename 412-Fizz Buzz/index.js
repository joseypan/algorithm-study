/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const list = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
      list.push("FizzBuzz");
    } else if (i % 3 === 0) {
      list.push("Fizz");
    } else if (i % 5 === 0) {
      list.push("Buzz");
    } else {
      list.push(String(i));
    }
  }
  return list;
};
