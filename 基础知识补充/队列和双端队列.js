// 队列和双端队列
//   1、队列数据结构
//     队列是遵循先进先出原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素丙戌排在队列的末尾
//     在现实中，最常见的队列的例子就是排队
//     在计算机科学中，一个常见的例子就是打印队列。比如说我们需要打印五份文档。我们会打开每一个文档，然后点击打印按钮。每个文档都会被发送至打印队列。第一个发送到打印队列的文档会首先被打印，以此类推。直到打印完所有文档
//     class Queque{
//       constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {}
//       }
//     }
//     此外，由于我们将要从队列前端移除元素，同样需要一个变量来帮助我们追踪第一个元素。因此，声明一个lowestcount变量
//     enqueue(element(s)):向队列尾部添加一个（或多个）新的项
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//       }
//     dequeue():移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//         dequeue(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           const result = this.items[this.lowestCount]
//           delete this.items[this.lowestCount]
//           this.lowestCount++
//           return result
//         }
//       }
//     peek():返回队列中第一个元素——最先被添加，也将是最先被移除的元素
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//         dequeue(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           const result = this.items[this.lowestCount]
//           delete this.items[this.lowestCount]
//           this.lowestCount++
//           return result
//         }
//         peek(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           return this.items[this.lowestCount]
//         }
//       }
//     isEmpty():如果队列中不包含任何元素，返回true,否则返回false
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//         dequeue(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           const result = this.items[this.lowestCount]
//           delete this.items[this.lowestCount]
//           this.lowestCount++
//           return result
//         }
//         peek(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           return this.items[this.lowestCount]
//         }
//         isEmpty(){
//           return this.count - this.lowestCount === 0;
//         }
//       }
//     size():返回队列包含的元素个数，与数组的length属性类似
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//         dequeue(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           const result = this.items[this.lowestCount]
//           delete this.items[this.lowestCount]
//           this.lowestCount++
//           return result
//         }
//         peek(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           return this.items[this.lowestCount]
//         }
//         isEmpty(){
//           return this.count - this.lowestCount === 0;
//         }
//         size(){
//           return this.count - this.lowestCount
//         }
//       }
//     clear():用来清空队列里面的内容
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//         dequeue(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           const result = this.items[this.lowestCount]
//           delete this.items[this.lowestCount]
//           this.lowestCount++
//           return result
//         }
//         peek(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           return this.items[this.lowestCount]
//         }
//         isEmpty(){
//           return this.count - this.lowestCount === 0;
//         }
//         size(){
//           return this.count - this.lowestCount
//         }
//         clear(){
//           this.items={};
//           this.count=0;
//           this.lowestCount =0
//         }
//       }
//     toString方法创建
//       class Queque{
//         constructor(){
//           this.count = 0;
//           this.lowestCount = 0;
//           this.items = {}
//         }
//         enqueue(element){
//           this.items[this.count] = element;
//           this.count++
//         }
//         dequeue(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           const result = this.items[this.lowestCount]
//           delete this.items[this.lowestCount]
//           this.lowestCount++
//           return result
//         }
//         peek(){
//           if(this.isEmpty()){
//             return undefined
//           }
//           return this.items[this.lowestCount]
//         }
//         isEmpty(){
//           return this.count - this.lowestCount === 0;
//         }
//         size(){
//           return this.count - this.lowestCount
//         }
//         clear(){
//           this.items={};
//           this.count=0;
//           this.lowestCount =0
//         }
//         toString(){
//           if(this.isEmpty()){
//             return ''
//           }
//           let objString = `${this.items[this.lowestCount]}`
//           for(let i=this.lowestCount+1;i<this.count;i++){
//             objString = `${objString},${this.items[i]}`
//           }
//           return objString
//         }
//       }

//   2、双端队列数据结构
//       双端队列（deque)是一种允许我们同时从前端和后端添加和移除元素的特殊队列
//       双端队列在现实生活中的例子有电影院、餐厅中排队的队伍等。举个例子，一个刚买了票的人如果只是还需要再问一些简单的信息，就可以直接回到队伍的头部，另外，在队伍末尾的人如果赶时间，他可以直接离开队伍
//       在计算机科学中，双端队列的一个常见应用是存储一些列的撤销操作。每当用户在软件中进行了一个操作，该操作会被存在一个双端队列中（就像在一个栈里）。当用户点击撤销按钮时，该操作会被从双端队列中弹出，表示它被从后面移除了。在进行了预先定义的一定数量的操作后，最先进行的操作会被从双端队列的前端移除。由于双端队列同事遵守了先进先出和后进先出原则，可以说它是把队列和栈结合的一种数据结构
//       2.1创建Deque类
//         和之前一样，先声明类和其构造函数
//         class Deque{
//           constructor(){
//             this.count = 0;
//             this.lowestCount = 0;
//             this.items={}
//           }
//         }
//         addFront(element):该方法在双端队列前端添加新的元素
//         addBack(element):该方法在双端队列后端添加新的元素（实现方法和Queue类中的enqueue方法相同）
//         removeFront():该方法会从双端队列前端移除第一个元素（实现方法和Queue类中的dequeque方法相同）
//         removeBack():该方法会从双端队列后端移除第一个元素（实现方法和Stack类中的pop方法啊一样）
//         peekFront():该方法返回双端队列前端的第一个元素（实现方法和Queue类中的peek方法一样）
//         peekBack():该方法返回双端队列后端的第一个元素（实现方法和Stack类中的peek方法一样）
//         class Deque{
//           constructor(){
//             this.count = 0;
//             this.lowestCount = 0;
//             this.items={}
//           }
//           addFront(element){
//             if(this.isEmpty()){
//               this.addBack(element)
//             }else if(this.lowestCount>0){
//               this.lowestCount--;
//               this.items[this.lowestCount] = element;
//             }else{
//               for(let i=this.count;i>0;i--){
//                 this.items[i] = this.items[i-1]
//               }
//               this.count++;
//               this.lowestCount = 0;
//               this.items[0] = element;
//             }
//           }
//         }
//   3、向队列和双端队列增加元素
//   4、从队列和双端队列中删除元素
//   5、用击鼓传花游戏模拟循环队列
//   6、用双端队列检查一个词组是否构成回文
