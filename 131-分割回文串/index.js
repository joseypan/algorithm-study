/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const path = [];
  const isValidStr = (str, startIndex, endIndex) => {
    while (endIndex > startIndex) {
      if (str[startIndex] !== str[endIndex]) {
        return false;
      }
      startIndex++;
      endIndex--;
    }
    return true;
  };
  const backtracking = (startIndex) => {
    //startIndex是当前切割符号的索引，当切割符>=s.length说明已经都切割完成了
    if (startIndex >= s.length) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      //这里需要考虑什么情况下应该收集
      if (isValidStr(s, startIndex, i)) {
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

const result = partition("aab");
console.log("result", result);
