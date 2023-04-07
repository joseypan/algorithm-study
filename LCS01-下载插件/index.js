/**
 * @param {number} n
 * @return {number}
 */
var leastMinutes = function (n) {
  // n代表的是当前需要转换的插件，还需要一个变量用来表示当前的插件数量，起始值为1
  // 这两种策略：(统计的是什么？下载个数？下载时间？--应该是下载时间)
  // 当前项a(n)能够处理的插件个数-> 策略1的话：k个 策略2的话：2k
  // 策略1：使用当前带宽下载 S(n) = 1 + S(n-1)
  // 策略2：带宽加倍 S(n) = 2 + S(n-1)  -> 其中1为升级带宽，1为下载插件
  // 当 n = 1 时 S(1) = 1
  // 当 n = 2 时 S(2) = 2
  const dps = [];
  dps[1] = 1;
  for (let i = 2; i <= n; i++) {
    dps.push(1 + Math.min(dps[i - 1], dps[Math.floor((i + 1) / 2)]));
  }
  return dps[n];
};

const result = leastMinutes(4);
console.log("result", result);
