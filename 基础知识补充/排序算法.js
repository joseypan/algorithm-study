// 排序算法
//   本章内容：学习计算机科学中最著名的排序算法
//   1、冒泡排序
//     冒泡排序是所有排序算法中最简单的，然而从运行时间的角度来看，冒泡排序是最差的一个
//     冒牌排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名
//     function bubbleSort(array,compareFn=defaultCompare){
//       const {length} = array;
//       for(let i=0;i<length;i++){
//         for(j=0;j<length-1-i;j++){
//           if(compareFn(array[j],array[j+1])===compareFn.BIGGER_THAN){
//             swap(array,j,j+1)
//           }
//         }
//       }
//       return array
//     }
//     function swap(array,a,b){
//       const temp = array[a];
//       array[a] = array[b];
//       array[b] = temp;
//     }
//   2、选择排序
//     选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位。以此类推
//     function selectionSort(array,compareFn=defaultCompare){
//       const {length} = array;
//       let indexMin;
//       for(let i=0;i<length-1;i++){
//         indexMin = i;
//         for(let j=i;j<length;j++){
//           if(compareFn(array[indexMin],array[j])===Compare.BIGGER_THAN){
//             indexMin = j;
//           }
//         }
//         if(i!==indexMin){
//           swap(array,i,indexMin)
//         }
//       }
//       return array;
//     }
//   3、插入排序
//     插入排序每次排一个数组项，以此方式构建最后的排序数组。
//     假定第一项已经排序了。接着，它和第二项进行比较——第二项是应该待在原位还是插到第一项之前呢？这样，头两项就已经正确排序，接着和第三项比较（他是应该插入到第一、第二还是第三的位置呢），以此类推
// const Compare = {
//   BIGGER_THAN: "BIGGER_THAN",
//   LESS_THAN: "LESS_THAN",
// };
// function defaultCompare(a, b) {
//   return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }
// function insertionSort(array, compareFn = defaultCompare) {
//   const { length } = array;
//   let temp;
//   for (let i = 1; i < length; i++) {
//     let j = i;
//     temp = array[i];
//     while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
//       array[j] = array[j - 1];
//       j--;
//     }
//     array[j] = temp;
//   }
//   return array;
// }
// let result = insertionSort([3, 2, 7, 4, 9, 10, 5, 8]);
// console.log("result", result);
//     4、归并排序
//       归并排序是第一个可以实际使用的排序算法。
//       归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组
//       由于是分治法，归并排序也是递归的。我们要将算法分位两个函数：第一个负责将一个大数组分为多个小数组并调用用来排序的辅助函数
//       function mergeSort(array,compareFn = defaultCompare){
//         if(array.length>1){
//           const {length} = array;
//           const middle = Math.floor(length/2);
//           const left = mergeSort(array.slice(0,middle),compareFn);
//           const right = mergeSort(array.slice(middle,length),compareFn);
//           array = merge(left,right,compareFn);
//         }
//         return array;
//       }
