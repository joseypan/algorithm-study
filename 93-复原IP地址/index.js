// 【分析】
// 1、这道题给定一个字符串s -> 我们需要根据这个s进行有效IP的组合 -> 所谓有效IP的值范围是0~255之间且不能前导为0
// 2、开始思考回溯的结束条件是什么？->startIndex >=s.length ->和昨天做的切割逻辑一致
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []; //雷打不动的用一个result来做结果收集
  const path = [];
  const isValidIP = (s, startIndex, i) => {
    //不以0开头的多位，数值不超过255
    const str = s.slice(startIndex, Math.floor(i + 1, s.length - 1));
    const num = Number(str);
    const isValidStart = (str) => {
      if (str.length === 1) return true;
      return str.length > 1 && !str.startsWith("0");
    };
    return num >= 0 && num <= 255 && isValidStart(str);
  };
  const backtracking = (startIndex) => {
    if (startIndex >= s.length && path.length === 4) {
      result.push(path.join("."));
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      //这里需要考虑是push一条数据，还是直接往后面拼接
      if (isValidIP(s, startIndex, i)) {
        const str = s.slice(startIndex, Math.floor(i + 1, s.length - 1));
        path.push(str);
      } else {
        continue;
      }
      backtracking(i + 1);
      path.pop();
    }
  };
  backtracking(0);
  return result;
};
