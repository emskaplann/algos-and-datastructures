class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  class Stack {
    constructor() {
      this.top = null
      this.bottom = null
      this.length = 0
    }
  
    peek() {
      return this.top
    }
  
    pop() {
      if(this.isEmpty()) {
        return null
      } else {
        this.top = this.top.next
        this.length--
      }
      if(this.top === this.bottom) {
        this.bottom = null
      }
      return this
    }
  
    push(value) {
      let newNode = new Node(value)
      if(this.isEmpty()) {
        this.top = newNode
        this.bottom = newNode
      } else {
        let holdingPointer = this.top
        this.top = newNode
        this.top.next = holdingPointer
      }
      this.length++
      return this
    }
  
    isEmpty() {
      if(this.length === 0) {
        return true;
      }
      return false;
    }
  
  }
  
  // const myStack = new Stack();
  // myStack.push("udemy")
  // myStack.push("google")
  // myStack.push("facebook")
  // myStack.pop()
  
  //STACK WITH ARRAY
  
  class StackWithArray {
    constructor() {
      this.arr = []
    }
  
    peek() {
      return this.arr[this.arr.length-1]
    }
  
  }
  
  // const myStack = new StackWithArray();
  // myStack.arr.push("udemy")
  // myStack.arr.push("google")
  // myStack.arr.push("facebook")
  // myStack.arr.pop()
  // myStack.peek()
  
  
  // Queues
  
  class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  class Queue {
    constructor() {
      this.first = null
      this.last = null
      this.length = 0
    }
  
    peek() {
      return this.first
    }
    enqueue(value) {
      let newNode = new Node(value)
      if(this.isEmpty()) {
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      this.length++
      return this
    }
    dequeue() {
      if(this.isEmpty()) {
        return null
      }
      if(this.first === this.last) {
        this.last = null
      }
       
      this.first = this.first.next
      this.length-- 
      return this
    }
    isEmpty() {
      if(this.length === 0) { 
        return true
      }
      return false
    }
  }
  
  // const myQueue = new Queue()
  // myQueue.enqueue("mary")
  // myQueue.enqueue("emir")
  // myQueue.enqueue("fatma")
  // myQueue.dequeue()
  // myQueue.dequeue()
  // myQueue.dequeue()
  // myQueue.enqueue("emir")
  // myQueue.enqueue("fatma")
  // myQueue.dequeue()
  
  // console.log(myQueue)
  
  // IMPLEMENT A QUEUE USING STACK
  
  /**
   * Initialize your data structure here.
   */
  var MyQueue = function() {
      this.array = []
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
      this.array.push(x)
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
      if(this.array.length > 0) {
          return this.array.shift()
      }
      return false
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
      if(this.array.length > 0) {
          return this.array[0]
      }
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
      return this.array.length === 0
  };
  
  /** 
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */