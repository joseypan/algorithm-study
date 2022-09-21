// 【分析】
// 1、这道题首先要维护一个数字和字母的对应关系
// 2、例如2对应abc 3对应def...
// 3、我们需要遍历这个字符串，假设取a,那么第二个字母可能取d/e/f
const map = new Map();
map.set(2, ["a", "b", "c"]);
map.set(3, ["d", "e", "f"]);
map.set(4, ["g", "h", "i"]);
map.set(5, ["j", "k", "l"]);
map.set(6, ["m", "n", "o"]);
map.set(7, ["p", "q", "r", "s"]);
map.set(8, ["t", "u", "v"]);
map.set(9, ["w", "x", "y", "z"]);
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const firstNumber = digits.slice(0, 1);
  const restNumber = digits.slice(1);
  let list = [];
  if (map.has(Number(firstNumber))) {
    const letterList = map.get(Number(firstNumber));
    for (let i = 0; i < letterList.length; i++) {
      if (restNumber) {
        const restList = letterCombinations(restNumber);
        restList.forEach((ele) => {
          let str = `${letterList[i]}${ele}`;
          list.push(str);
        });
      } else {
        list.push(letterList[i]);
      }
    }
  }
  return list;
};

let result = letterCombinations("23");
console.log("result", result);
