// 【分析】
// 1、假设楼梯有n个台阶，每次可以跨1个或者2个，我的每一步的方案都和前一次的选择相关
// 2、题解要求是有多少个解决方案？首先1+1和2就能算作是两种
// 3、首先判断n是不是2的倍数，若是2的倍数，则有多少个2,就有2^x的方案，奇数也一样，最后只能选择1
// 4、这是假设，列举一下例子判断假设是否正确(不正确)
//再次分析
// n个楼梯 有多少种情况 ->未知
// n-1个楼梯 有多少种情况 -> Sn和Sn-1之间的关系是什么?
// n-2个楼梯 有多少种情况 -> Sn和Sn-2之间的关系是什么?
// 按照正常的思维来说：
// 假设n-1个台阶，有Sn-1中方式
// n个台阶是在n-1个台阶的基础上加了一个，加的这一个会影响计算方式吗？
// 例如我有4个台阶
// 1+1+1+1 = 4
// 1+2+1 = 4
// 1+1+2 = 4
// 2+1+1 =4
// 2+2 =4
// 当我有5个台阶的时候
// 1+1+1+1+1 =5
// 1+2+1+1 =5
// 1+1+2+1 =5
// 2+1+1+1 =5
// 2+2+1 =5
// 1+1+1+2 =5
// 1+2+2 =5
// 2+1+2=5
// 从上述式子可知，当有5个台阶的时候比4个台阶多了3种情况，我们分析一下这3种情况的特点，都是以+2结尾
// 那是否可以认为只要an-2 的所有种情况都结尾+2都能补充成为Sn多于Sn-1的情况
// 故得出公式Sn = Sn-1+Sn-2
// 这个时候场景就变成斐波那契额数列了
// const map = new Map();
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   if (map.get(n)) return map.get(n);
//   let Sni = climbStairs(n - 1);
//   map.set(n - 1, Sni);
//   let Snii = climbStairs(n - 2);
//   map.set(n - 2, Snii);
//   return Sni + Snii;
// };
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let firstCount = 1;
  let secondCount = 2;
  for (let i = 3; i <= n; i++) {
    let sum = firstCount + secondCount;
    firstCount = secondCount;
    secondCount = sum;
  }
  return secondCount;
};
let result = climbStairs(45);
console.log("result", result);
