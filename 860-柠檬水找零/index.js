// 【分析】
// 只要剩余金额>=当前金额-5 && 包含5元货币就继续，否则返回false
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0;
  let tenCount = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      //不需要找零
      fiveCount++;
    } else if (bills[i] === 10) {
      //消耗一张五块的，增加一张十块的
      if (fiveCount > 0) {
        fiveCount -= 1;
        tenCount++;
      } else {
        return false; //没有五块的，无法找零
      }
    } else if (bills[i] === 20) {
      //优先考虑一张10块一张5块
      if (tenCount > 0 && fiveCount > 0) {
        tenCount -= 1;
        fiveCount -= 1;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
const result = lemonadeChange([5, 5, 5, 10, 20]);
console.log("result", result);
