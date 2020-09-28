class DoublyLinkedList {
    constructor(value) {
      this.head = {value: value, prev: null, next: null};
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const newNode = {value: value, prev: null, next: null}
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
      this.length += 1
      return this
    }
  
    prepend(value) {
      this.head = {value: value, prev: null, next: this.head}
      this.length += 1
    }
  
    insert(index, value) {
      if(index === 0) {
        this.prepend(value)
      }
      let currentNode = this.head
      for(let i = 0; i < index; i++) {
        currentNode = currentNode.next
        if(i === index - 1) {
          currentNode.next = {value: currentNode.value, prev: currentNode.prev, next: currentNode.next}
          currentNode.prev = {value: currentNode.prev.value,prev: currentNode.prev.prev, next: currentNode}
          currentNode.value = value
          this.length += 1
        }
      }
      return this
    }
  
    remove(index) {
      let currentNode = this.head
      for(let i = 0; i < index; i++) {
        currentNode = currentNode.next
        if(i === index - 1) {
          currentNode.value = currentNode.next.value
          currentNode.next = currentNode.next.next
        }
      }
      if(index === 0) {
        currentNode.value = currentNode.next.value
        currentNode.next = currentNode.next.next
      }
    }
  
    printList() {
      let currentNode = this.head
      const newArr = []
      while(currentNode !== null) {
        newArr.push(currentNode.value)
        currentNode = currentNode.next
      }
      return newArr
    }
  
  }
  
  const myLinkedList = new DoublyLinkedList(10)
  myLinkedList.append(5)
  myLinkedList.append(16)
  myLinkedList.insert(1,3)
  
  // console.log(myLinkedList.printList())
  console.log(myLinkedList.head.next)
  
  // DOUBLE LINKED LIST => I NEED TO WORK ON IT ESPECIALLY ON "INSERT"