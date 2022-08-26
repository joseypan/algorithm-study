// 【分析】
// 2的幂次方的二进制有一个特性，那就是他的二进制只有一个1，并且都是和他的n-1的0,1位置互相取反，因此我们可以使用n和n-1的二进制进行按照位与的操作，我们就可以得到结果为0，因此得出结果。
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
