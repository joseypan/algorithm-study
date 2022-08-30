// 【分析】
// 1、熟悉和了解冒泡排序，首先来分析一下冒泡排序他的原理什么
// 2、所谓冒泡，也是比较形象的比喻，这里假设升序排列
//     当我们相邻两元素进行比较的时候，若按照升序排列，我们一定会让大的在后。
//     所以在我们逐步换位的情况下，最大的一定会排在最后，其次是第二大的数
//     这样所有都操作完成后整个数组都会按照升序进行排列
let bubbleSortFn = (list) => {
  for (let i = 0; i < list.length; i++) {
    //外层循环是因为有list.length个元素，所以需要滚动这么多次才会实现完全排序
    for (let j = 0; j < list.length - 1; j++) {
      // list[i]表示的是当前外层遍历的第一项
      if (list[j] > list[j + 1]) {
        // 判断数组中的当前项与后一项的比较，大的放在后面，这样滚动一轮，最大的一定放在了最后一轮
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};

const result = bubbleSortFn([2, 1, 7, 8, 52, 123, 56, 76, 4, 9]);
console.log(result);

// 经过上述的操作我们已经实现了一个基本的从小到大的冒泡排序了
// 优化点：根据类型区分是从小到大排序，还是从大到小排序
bubbleSortFn = (list, ascending) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (ascending === true && list[j] > list[j + 1]) {
        //升序
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      } else if (ascending === false && list[j] < list[j + 1]) {
        //降序
        const temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
};
const result1 = bubbleSortFn([2, 1, 7, 8, 52, 123, 56, 76, 4, 9], false);
console.log("result1", result1);

// 经过进一步的修改能够实现根据变量ascending来决定是升序还是降序，再进行不同的逻辑处理
// 优化：但中间赋值部分逻辑有些许累赘，能否将这一块的逻辑改为更为通用的呢？
bubbleSortFn = (list, ascending) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (ascending === true && list[j] > list[j + 1]) {
        //升序
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      } else if (ascending === false && list[j] < list[j + 1]) {
        //降序
        const temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
};
