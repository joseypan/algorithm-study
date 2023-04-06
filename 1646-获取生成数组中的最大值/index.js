var getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  const dps = [];
  dps[0] = 0;
  dps[1] = 1;
  let maxNum = dps[1];
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      // 偶数
      dps.push(dps[i / 2]);
    } else {
      dps.push(dps[(i - 1) / 2] + dps[(i - 1) / 2 + 1]);
    }
    maxNum = Math.max(maxNum, dps[dps.length - 1]);
  }
  return maxNum;
};
