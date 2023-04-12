/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  // 需要对时钟和分钟进行分组
  // 时钟最多为1111 ->所以好像右移更合适？
  // 分钟最多为11111
  // 但是有一个问题是我如何统计个数呢？右移的个数就是灭灯的个数
  // 但是它亮灯并不一定是连续的 可能是1011 1001
  // 那就是需要双层循环
  const list = [];
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (
        i.toString(2).split("0").join("").length +
          j.toString(2).split("0").join("").length ===
        turnedOn
      ) {
        list.push(i + ":" + (j < 10 ? "0" : "") + j);
      }
    }
  }
  return list;
};
