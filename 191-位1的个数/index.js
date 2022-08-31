/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  //这道题明显是二进制运算，判断某一位是否是1，首先能想到的是逻辑与，当均为1的时候不等于0
  // 有一个思路是我们将数字1进行移位，然后移位之后和当前项进行与运算，若不为0则表示当前位为1，count++
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      count++;
    }
  }
  return count;
};

function test(n) {
  console.log(n & (1 << 2));
}
test(11);
