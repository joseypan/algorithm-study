// 【分析】
// 1、目前并不知道字母与数字的对应关系，只知道A-Z是1-26,至于后面是怎么样的一个排序是不清楚的
// 2、由于不清楚计算规则，所以也很难根据数字进行推导，不是很明白题目的含义
// 相当于满26进一位？
// 问题可以转换为等同于将10进制转2进制是如何转的，这里只不过是把10进制转26进制
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const map = getChartMap();
  let str = "";
  let computedNum = columnNumber;
  let count = 0;
  while (computedNum) {
    count = computedNum % 26;
    if (count === 0) {
      //说明可以整除
      computedNum = (computedNum - 26) / 26;
      str = "Z" + str;
    } else {
      computedNum = (computedNum - count) / 26;
      str = map.get(count) + str;
    }
  }
  return str;
};

const getChartMap = () => {
  const map = new Map();
  map.set(1, "A");
  map.set(2, "B");
  map.set(3, "C");
  map.set(4, "D");
  map.set(5, "E");
  map.set(6, "F");
  map.set(7, "G");
  map.set(8, "H");
  map.set(9, "I");
  map.set(10, "J");
  map.set(11, "K");
  map.set(12, "L");
  map.set(13, "M");
  map.set(14, "N");
  map.set(15, "O");
  map.set(16, "P");
  map.set(17, "Q");
  map.set(18, "R");
  map.set(19, "S");
  map.set(20, "T");
  map.set(21, "U");
  map.set(22, "V");
  map.set(23, "W");
  map.set(24, "X");
  map.set(25, "Y");
  map.set(26, "Z");
  return map;
};
let result = convertToTitle(2147483647); //FXSHRXW
console.log("result", result);
