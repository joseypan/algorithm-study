/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const dps = [];
  dps[0] = 0;
  dps[1] = 1;
  dps[2] = 1;
  for (let i = 3; i <= n; i++) {
    const sum = dps[i - 1] + dps[i - 2] + dps[i - 3];
    dps.push(sum);
  }
  return dps[n];
};
