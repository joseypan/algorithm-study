栈数据结构
1、定义：
  栈是一种遵从后进先出原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都是靠近栈顶，旧元素都接近栈底
2、实现
  2.1创建一个基于数组的栈
    class Stack{
      constructor(){
        this.items=[]
      }
    }
  我们需要一种数据结构来保存栈里的元素，可以选择数组。数组允许我们在任何位置添加或删除元素。由于栈遵循先进后出的原则，需要对元素的插入和删除功能进行限制
  push(element(s))：添加一个（或几个）新元素到栈顶
  pop()：移除栈顶的元素，同事返回被移除的元素
  peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）
  isEmpty()：如果栈里没有任何元素就返回true，否则返回false
  clear()：移除栈里的所有元素
  size()：返回栈里的元素个数。该方法和数组length属性很类似
  2.2向栈添加元素
    class Stack{
      constructor(){
        this.items=[]
      };
      push(element){
        this.items.push(element)
      }
    }
  2.3从栈移除元素
    接着实现pop方法，该方法主要用来移除栈里的元素。栈遵从先进后出原则，因此移除的是最后添加进去的元素。因此，我们可以用上一章讲数组时介绍的pop方法
    class Stack{
      constructor(){
        this.items=[]
      };
      push(element){
        this.items.push(element)
      };
      pop(){
        this.items.pop()
      }
    }
  2.4查看栈顶元素
    如果我们想知道栈里最后添加的元素是什么。可以用peek方法，该方法将返回栈顶的元素
    class Stack{
      constructor(){
        this.items=[]
      };
      push(element){
        this.items.push(element)
      };
      pop(){
        this.items.pop()
      };
      peek(){
        return this.items[this.items.length-1]
      }
    }
    因为类内部是用数组保存元素的，所以访问数组的最后一个元素可以用length-1 
  2.5检查栈是否为空
    如果栈为空的话将返回true，否则就返回false
    class Stack{
      constructor(){
        this.items=[]
      };
      push(element){
        this.items.push(element)
      };
      pop(){
        this.items.pop()
      };
      peek(){
        return this.items[this.items.length-1]
      };
      isEmpty(){
        return this.items.length === 0
      }
    }
    返回栈的长度也类似
    class Stack{
      constructor(){
        this.items=[]
      };
      push(element){
        this.items.push(element)
      };
      pop(){
        this.items.pop()
      };
      peek(){
        return this.items[this.items.length-1]
      };
      isEmpty(){
        return this.items.length === 0
      };
      size(){
        return this.items.length
      }
    }
  2.6清空栈元素
    clear方法用来移除栈里所有的元素，把栈清空。
    class Stack{
      constructor(){
        this.items=[]
      };
      push(element){
        this.items.push(element)
      };
      pop(){
        this.items.pop()
      };
      peek(){
        return this.items[this.items.length-1]
      };
      isEmpty(){
        return this.items.length === 0
      };
      size(){
        return this.items.length
      };
      clear(){
        this.items=[]
      }
    }
  2.2基于对象的Stack类
   class Stack{
    constructor(){
      this.count = 0;
      this.items={}
    }
   } 
   在这个版本的Stack类中，我们将使用一个count属性来帮助我们记录栈的大小（也能帮助我们从数据结构中添加和删除元素）
   2.1向栈中插入元素
    在基于数组的版本中，我们可以同时向Stack类中添加多个元素。由于现在使用了一个对象，这个版本的push方法只允许我们一次插入一个元素
    class Stack{
      constructor(){
        this.count=0;
        this.items={}
      };
      push(element){
        this.items[this.count] = element;
        this.count++
      }
    }
  2.2验证一个栈是否为空和它的大小
    class Stack{
      constructor(){
        this.count = 0;
        this.items = []
      };
      size(){
        return this.count;
      };
      isEmpty(){
        return this.count === 0
      }
    }
 2.3从栈中弹出元素
    由于我们没有使用数组来存储元素，需要手动实现移除元素的逻辑。pop方法同样返回了从栈中移除的元素，
    class Stack{
      constructor(){
        this.count = 0;
        this.items = []
      };
      size(){
        return this.count;
      };
      isEmpty(){
        return this.count === 0
      };
      pop(){
        if(this.isEmpty()){
          return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result
      }
    }
  2.4 查看栈顶的值并将栈清空
    class Stack{
      constructor(){
        this.count = 0;
        this.items = []
      };
      size(){
        return this.count;
      };
      isEmpty(){
        return this.count === 0
      };
      pop(){
        if(this.isEmpty()){
          return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result
      }
      peek(){
        if(this.isEmpty()){
          return undefined;
        }
        return this.items[this.count-1]
      };
      clear(){
        this.items = {};
        this.count = 0;
      }
    }
  2.5 创建toString方法
    在数组版本中，我们不需要关心toString方法的实现，因为数据结构可以直接使用数组已经提供的toString方法。对于使用对象的版本，我们将创建一个toString方法来像数组