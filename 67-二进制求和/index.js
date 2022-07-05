/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  //和昨天的题目思路一致，满2进一,但是有一个区别昨天的是加1即可，今天这个涉及到两个字符串右对齐的情况，如何右对齐呢
  //弄两个指针？分别代表a的当前指针和b的当前指针？
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  //使用这个数组进行统计最终的值，最后方法范围resultArr.join('');
  const resultArr = [];
  //是否需要进位？(0表示不用进位，1表示需要进位)
  let flag = 0;
  while (aIndex >= 0 || bIndex >= 0) {
    //说明a,b都还能进行相加(aIndex<0或者bIndex<0则用0补位)
    const aCount = aIndex >= 0 ? Number(a[aIndex]) : 0;
    const bCount = bIndex >= 0 ? Number(b[bIndex]) : 0;
    let sum = aCount + bCount + flag;
    //累加的和，需要
    flag = sum >= 2 ? 1 : 0;
    resultArr.unshift(sum % 2);
    aIndex--;
    bIndex--;
  }
  if (flag) resultArr.unshift(1);
  return resultArr.join("");
};
let result = addBinary("11", "1");
console.log(result);
