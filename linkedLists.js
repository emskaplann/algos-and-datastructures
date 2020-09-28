class LinkedList {
    constructor(value) {
      this.head = {value: value, next: null};
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      this.tail.next = {value: value, next: null}
      this.tail = this.tail.next
      this.length += 1
    }
  
    prepend(value) {
      this.head = {value: value, next: this.head}
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
          currentNode.next = {value: currentNode.value, next: currentNode.next}
          currentNode.value = value
          this.length += 1
        }
      }
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
  
  // 10 --> 5 --> 16
  const myLinkedList = new LinkedList(10)
  myLinkedList.append(5)
  myLinkedList.append(16)
  myLinkedList.prepend(12)
  myLinkedList.insert(2,3)
  myLinkedList.remove(1)
  myLinkedList.remove(0)
  myLinkedList.insert(2,31)
  
  console.log(myLinkedList.printList())