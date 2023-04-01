/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
  // 如果最后一步走1步，S(n-1)+a(n-1)
  // 如果最后一步走2步，S(n-2)+a(n-2)
  const dps = [];
  dps[0] = 0;
  dps[1] = 0;
  for(let i=2;i<=cost.length;i++){
      dps.push(Math.min(dps[i-1]+cost[i-1],dps[i-2]+cost[i-2]));
  }
  return dps[dps.length-1]
};