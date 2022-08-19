// 集合：
// 1、在本章，我们要学习集合，这是一种不允许值重复的顺序数据结构。
// 2、我们将要学到如何创建集合这种数据结构，如何添加和移除值，如何搜索值是否存在，以及交并补差等数学运算
// 本章内容：
//   从头创建一个Set类
//   用Set来进行数学运算
//   ECMAScript2015原生Set类
//   1、构建数据集合
//     集合是由一组无序且唯一（即不能重复）的项组成的。该数据结构使用了与有限集合相同的数学概念，但应用在计算机科学的数据结构中。
//     在深入学习集合的计算机科学实现之前，我们先看看它的数学概念。在数学中，集合是一组不同对象的集
//     比如说，一个由大于或等于0的整数组成的自然数集合：N={0,1,2,3,4,5,6...}集合中的对象列表用花括号（{})包围
//     还有一个概念叫空集。空集就是不包含任何元素的集合。比如24和29之间的素数集合，由于24和29之间没有素数（除1和自身，没有其他正因数的，大于1的自然数），这个集合就是空集，空集用{}表示
//   2、创建集合类
//     ECMAScript2015介绍了Set类是JS API的一部分，
//     class Set{
//       constructor(){
//         this.items={}
//       }
//     }
//     有一个非常重要的细节是，我们使用对象而不是数组来表示集合（items)。也可以用数组实现，js的对象不允许一个键指向两个不同的属性，也保证了集合里的元素都是唯一的
//     add(element):向集合添加一个新元素
//     class Set{
//       constructor(){
//         this.items = {}
//       }
//       has(element){
//         // return element in items
//         return Object.prototype.hasOwnProperty.call(this.items,element)
//       }
//       add(element){
//         if(!this.has(element)){
//           this.items[element] = element;
//           return true;
//         }
//         return false
//       }
//     }
//       对于给定的element，可以检查它是否存在于集合中。如果不存在，就把element添加到集合中，返回true,表示添加了该元素。如果集合中已经有了这个元素，就返回false,表示没有添加它
//       【注意】添加一个element的时候，把它同时作为键和值保存，因为这样有利于查找该元素
//     delete(element):从集合移除一个元素
//     class Set{
//       constructor(){
//         this.items={}
//       }
//       has(element){
//         return Object.prototype.hasOwnProperty.call(this.items,element)
//       }
//       add(element){
//         if(!this.has(element)){
//           this.items[element] = element;
//           return true;
//         }
//         return false
//       }
//       delete(element){
//         if(this.has(element)){
//           delete this.items[element]
//           return true
//         }
//         return false
//       }
//     }
//     has(element):如何元素在集合中，返回true,否则返回false
//     class Set{
//       constructor(){
//         this.items = {}
//       }
//       has(element){
//         // return element in items
//         return Object.prototype.hasOwnProperty.call(this.items,element)
//       }
//     }
//     clear():移除集合中的所有元素
//     class Set{
//       constructor(){
//         this.items={}
//       }
//       has(element){
//         return Object.prototype.hasOwnProperty.call(this.items,element)
//       }
//       add(element){
//         if(!this.has(element)){
//           this.items[element] = element;
//           return true;
//         }
//         return false
//       }
//       delete(element){
//         if(this.has(element)){
//           delete this.items[element]
//           return true
//         }
//         return false
//       }
//       clear(){
//         this.items = {}
//       }
//     }
//     size():返回集合所包含元素的数量。它与数组的length属性类似
//       第一种实现方式：size
//         在类里面维护一个变量count，初始值为0，当调用add方法的时候count++，当调用delete方法的时候count--，当调用clear方法的时候count为0
//       第二种实现方式：Object.keys()
//         class Set{
//           constructor(){
//             this.items={}
//           }
//           has(element){
//             return Object.prototype.hasOwnProperty.call(this.items,element)
//           }
//           add(element){
//             if(!this.has(element)){
//               this.items[element] = element;
//               return true;
//             }
//             return false
//           }
//           delete(element){
//             if(this.has(element)){
//               delete this.items[element]
//               return true
//             }
//             return false
//           }
//           clear(){
//             this.items = {}
//           }
//           size(){
//             return Object.keys(this.items).length;
//           }
//         }

//       第三种实现方式：手动提取items对象的每一个属性，记录属性的个数并返回这个数
//         class Set{
//           constructor(){
//             this.items={}
//           }
//           has(element){
//             return Object.prototype.hasOwnProperty.call(this.items,element)
//           }
//           add(element){
//             if(!this.has(element)){
//               this.items[element] = element;
//               return true;
//             }
//             return false
//           }
//           delete(element){
//             if(this.has(element)){
//               delete this.items[element]
//               return true
//             }
//             return false
//           }
//           clear(){
//             this.items = {}
//           }
//           sizeLegacy(){
//             let count = 0;
//             for(let key in this.items){
//               if(this.items.hasOwnProperty(key)){
//                 count++
//               }
//             }
//             return count
//           }
//         }
//     values():返回一个包含集合中所有值（元素）的数组
//         class Set{
//           constructor(){
//             this.items={}
//           }
//           has(element){
//             return Object.prototype.hasOwnProperty.call(this.items,element)
//           }
//           add(element){
//             if(!this.has(element)){
//               this.items[element] = element;
//               return true;
//             }
//             return false
//           }
//           delete(element){
//             if(this.has(element)){
//               delete this.items[element]
//               return true
//             }
//             return false
//           }
//           clear(){
//             this.items = {}
//           }
//           sizeLegacy(){
//             let count = 0;
//             for(let key in this.items){
//               if(this.items.hasOwnProperty(key)){
//                 count++
//               }
//             }
//             return count
//           }
//           values(){
//             // Object.values()方法返回了一个包含给定对象所有属性值的数组,在ECMAScript2017中被添加进来的
//             return Object.values(this.items)
//           }
//         }
//    2、集合运算
//         集合是数学中基础的概念，在计算机领域也非常重要。它在计算机科学中主要应用之一是数据库，而数据库是大多数应用程序的根基。集合被用于查询的设计和处理。当我们创建一条从关系型数据库中获取一个数据集合的查询语句时，使用的就是集合运算，并且数据库也会返回一个数据集合。
//         当我们创建一条SQL查询命令时，可以指定是从表中获取全部数据还是获取其中的子集；也可以获取两张表共用的数据、只存在于一张表中的数据，或是存在于两张表内的数据。这些SQL领域的运算叫做联接，而SQL联接的基础就是集合运算
//         运算分类
//           a.并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合
//           b.交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合
//           c.差集：对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在第二个集合的元素的新集合
//           d.子集：验证一个给定集合是否是另一集合的子集
//         class Set{
//           constructor(){
//             this.items={}
//           }
//           has(element){
//             return Object.prototype.hasOwnProperty.call(this.items,element)
//           }
//           add(element){
//             if(!this.has(element)){
//               this.items[element] = element;
//               return true;
//             }
//             return false
//           }
//           delete(element){
//             if(this.has(element)){
//               delete this.items[element]
//               return true
//             }
//             return false
//           }
//           clear(){
//             this.items = {}
//           }
//           sizeLegacy(){
//             let count = 0;
//             for(let key in this.items){
//               if(this.items.hasOwnProperty(key)){
//                 count++
//               }
//             }
//             return count
//           }
//           values(){
//             // Object.values()方法返回了一个包含给定对象所有属性值的数组,在ECMAScript2017中被添加进来的
//             return Object.values(this.items)
//           }
//           union(otherSet){
//             const unionSet = new Set()
//             this.values().forEach(value=>unionSet.add(value))
//             otherSet.value().forEach(value=>unionSet.add(value))
//             return unionSet
//           }
//           intersection(otherSet){
//             // 这种写法虽然也可以实现，但是在计算两个集合的交集部分，其实只需要遍历长度较小的一方，就能实现。所以可以进行优化
//             // const intersectionSet = new Set();
//             // const values = this.values()
//             // for(let i =0;i<values.length;i++){
//             //   if(otherSet.has(values[i])){
//             //     intersectionSet.add(values[i])
//             //   }
//             // }
//             // return intersectionSet
//             const intersectionSet = new Set();
//             const values = this.values();
//             const otherValues = otherSet.values();
//             let biggerSet = values;
//             let smallerSet = otherValues;
//             if(otherValues.length - values.length>0){
//               biggerSet = otherValues;
//               smallerSet = values;
//             }
//             smallerSet.forEach(value=>{
//               if(biggerSet.includes(value)){
//                 intersectionSet.add(value)
//               }
//             })
//             return intersectionSet
//           }
//           defferenc(otherSet){
//             const differenceSet = new Set();
//             this.values().forEach(value=>{
//               if(!otherSet.has(value)){
//                 differenceSet.add(value)
//               }
//             })
//             return differenceSet
//           }
//           isSubsetOf(otherSet){
//             if(this.size()>otherSet.size()){
//               return false;
//             }
//             let isSubset = true;
//             this.values().every(value=>{
//               if(!otherSet.has(value)){
//                 isSubset = false;
//                 return false;
//               }
//               return true
//             })
//             return isSubset
//           }
//         }
