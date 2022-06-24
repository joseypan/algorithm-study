//初步理解题意
//1、首先需要创建一个对应关系的map，方便可以进行查找（一开始可以先用判断符号进行写死）
//2、遍历传入的字符串，首先查看有无对应特例的情况，如果没有特例情况直接按照对应字母的数值进行累加即可
const list = [
  {
    chart: "I",
    value: 1,
  },
  {
    chart: "V",
    value: 5,
  },
  {
    chart: "X",
    value: 10,
  },
  {
    chart: "L",
    value: 50,
  },
  {
    chart: "C",
    value: 100,
  },
  {
    chart: "D",
    value: 500,
  },
  {
    chart: "M",
    value: 1000,
  },
  {
    chart: "IV",
    value: 4,
  },
  {
    chart: "IX",
    value: 9,
  },
  {
    chart: "XL",
    value: 40,
  },
  {
    chart: "XC",
    value: 90,
  },
  {
    chart: "CD",
    value: 400,
  },
  {
    chart: "CM",
    value: 900,
  },
];
const initMap = (data) => {
  const map = new Map();
  data.forEach((ele) => {
    map.set(ele.chart, ele.value);
  });
  return map;
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dataMap = initMap(list);
  let totalCount = 0;
  let index = 0;
  while (index < s.length) {
    if (s[index] === "I" || s[index] === "X" || s[index] === "C") {
      let str = s[index] + s[index + 1];
      if (dataMap.get(str)) {
        totalCount += dataMap.get(str);
        index = index + 2;
      } else {
        totalCount += dataMap.get(s[index]);
        index++;
      }
    } else {
      totalCount += dataMap.get(s[index]);
      index++;
    }
  }
  return totalCount;
};
