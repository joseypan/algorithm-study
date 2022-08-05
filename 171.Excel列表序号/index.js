// 【分析】
// 1、思路大致是维护一个map用来对应字母与数字之间的关系，然后遍历传入的字符串，遍历最好是i--的形式，然后用幂次的形式进行计算
// 公式：m*26^2+n*26^1+x*26^0
// 可以不用太通过map,直接使用charCodeAt也能实现
const createMap = () => {
  const map = new Map();
  map.set("A", 1);
  map.set("B", 2);
  map.set("C", 3);
  map.set("D", 4);
  map.set("E", 5);
  map.set("F", 6);
  map.set("G", 7);
  map.set("H", 8);
  map.set("I", 9);
  map.set("J", 10);
  map.set("K", 11);
  map.set("L", 12);
  map.set("M", 13);
  map.set("N", 14);
  map.set("O", 15);
  map.set("P", 16);
  map.set("Q", 17);
  map.set("R", 18);
  map.set("S", 19);
  map.set("T", 20);
  map.set("U", 21);
  map.set("V", 22);
  map.set("W", 23);
  map.set("X", 24);
  map.set("Y", 25);
  map.set("Z", 26);
  return map;
};
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const map = createMap();
  let count = 0;
  let i = columnTitle.length - 1;
  let index = 0;
  while (i >= 0) {
    let currentNum = map.get(columnTitle[i]);
    count += currentNum * Math.pow(26, index);
    console.log("count", count);
    i--;
    index++;
  }
  return count;
};
var titleToNumber = function (columnTitle) {
  let number = 0;
  let multiple = 1;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const k = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;
    number += k * multiple;
    multiple *= 26;
  }
  return number;
};
const result = titleToNumber("AB");
console.log("result", result);
