/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  let lastItemList = [1];
  for (let i = 0; i < rowIndex; i++) {
    const itemList = [];
    itemList.push(1);
    for (let j = 0; j < lastItemList.length - 1; j++) {
      let sum = lastItemList[j] + lastItemList[j + 1];
      itemList.push(sum);
    }
    itemList.push(1);
    lastItemList = itemList;
  }
  return lastItemList;
};
