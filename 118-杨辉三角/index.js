/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let list = [];
  for (let i = 0; i < numRows; i++) {
    const item = [];
    item.push(1);
    let listLen = list.length;
    if (listLen <= 0) {
      list.push(item);
      continue;
    }
    let lastItem = list[listLen - 1];
    for (let j = 0; j < lastItem.length; j++) {
      if (j !== lastItem.length - 1) {
        let sum = lastItem[j] + lastItem[j + 1];
        item.push(sum);
      }
    }
    item.push(1);
    list.push(item);
  }
  return list;
};
