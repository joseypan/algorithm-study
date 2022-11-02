// 例如 77题
// 【分析】
// [1,n]说明n是横向for循环的,个数为k,则k是纵向深度
const combine = (n, k) => {
  const result = []; //用来收集结果的容器
  const list = []; //每一层的容器
  const backtracking = (n, k, startIndex, list) => {
    //终止条件
    if (list.length === k) {
      //说明收集满了
      result.push([...list]);
      return; //结束递归
    }
    //循环体
    for (let i = startIndex; i <= n; i++) {
      //收集
      list.push(i);
      //递归
      backtracking(n, k, i + 1, list);
      //回溯
      list.pop();
    }
  };
  backtracking(n, k, 1, list);
  return result;
};
