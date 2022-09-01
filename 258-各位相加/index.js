/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let count = num;
  while (count >= 10) {
    let data = count;
    count = 0;
    while (data > 0) {
      count += data % 10;
      data = Math.floor(data / 10);
    }
  }
  return count;
};
