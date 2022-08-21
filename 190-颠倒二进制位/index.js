// 【分析】
// 1、这道题主要是考察二进制的运算
// 2、要实现二进制数的翻转，我们首先来实验一下二进制的移位，这个应该主要是要考虑移位多少
// function tranformFn(num) {
//   return num << 2; //00001100(整体向左移了两位)
// }
// let result = tranformFn(3); //00000011
// console.log("result", result);

// var reverseBits = function (n) {
//   let rev = 0;
//   for (let i = 0; i < 32 && n > 0; ++i) {
//     rev |= (n & 1) << (31 - i);
//     console.log("rev", rev);
//     n >>>= 1;
//   }
//   // return rev >>> 0;
// };
// const result1 = reverseBits(4);
// console.log("result1", result1);
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    rev |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return rev >>> 0;
};
