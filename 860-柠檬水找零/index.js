// 【分析】
// 只要剩余金额>=当前金额-5 && 包含5元货币就继续，否则返回false
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let total = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      total += bills[i];
    } else if (total < bills[i] || total % 5 !== 0) {
      return false;
    } else {
      total = total - bills[i] + 5;
    }
  }
  return true;
};
