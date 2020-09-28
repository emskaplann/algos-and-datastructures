class Node {
    constructor(value){
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null
    }
    insert(value) {
      let currentNode = this.root
      let newNode = new Node(value)
      let stop = false
      if(currentNode === null) {
        this.root = newNode
      } else {
        while(!stop) {
          if(value > currentNode.value) {
            if(currentNode.right === null) {
              currentNode.right = newNode
              stop = true
            } else {
              currentNode = currentNode.right
            }
          } else if(value < currentNode.value) {
            if(currentNode.left === null) {
              currentNode.left = newNode
              stop = true
            } else {
              currentNode = currentNode.left
            }
          }
        }
      }
      
    }
    lookup(value) {
      let currentNode = this.root
      let stop = false
      if(currentNode.value === value) {
              console.log(`found ${currentNode.value}`)
      }
      while(!stop) {
          if(value > currentNode.value) {
            if(currentNode.right === null) {
              console.log('not found')
              stop = true
            } else {
              currentNode = currentNode.right
            }
            if(currentNode.value === value) {
              console.log(`found ${currentNode.value}`)
              return currentNode
            }          
          } else if(value < currentNode.value) {
            if(currentNode.left === null) {
              console.log('not found')
              stop = true
            } else {
              currentNode = currentNode.left
            }
            if(currentNode.value === value) {
              console.log(`found ${currentNode.value}`)
              return currentNode
            } 
          }
        }
    }
    parentNode(value) {
      let currentNode = this.root
      let stop = false
      if(currentNode.value === value) {
              return false
      }
      while(!stop) {
          if(value > currentNode.value) {
            if(currentNode.right === null) {
              console.log('not found')
              stop = true
              return false
            } else {
              if(currentNode.right.value === value) {
                stop = true
                return currentNode
              }
              currentNode = currentNode.right
            }
            if(currentNode.value === value) {
              console.log(`found ${currentNode.value}`)
              return currentNode
            }          
          } else if(value < currentNode.value) {
            if(currentNode.left === null) {
              console.log('not found')
              stop = true
              return false
            } else {
              if(currentNode.left.value === value) {
                stop = true
                return currentNode
              }
              currentNode = currentNode.left
            }
            if(currentNode.value === value) {
              console.log(`found ${currentNode.value}`)
              return currentNode
            } 
          }
        }
    }
    remove(value) {
      if(!this.root) {
        return false
      }
      let parentNode = this.parentNode(value)
      let stop = false
      let currentNode = parentNode.value < value ? parentNode.right : parentNode.left
      let currentNode2 = parentNode.value < value ? parentNode.right : parentNode.left
  
      while(!stop) {
          if(!currentNode.left && !currentNode.right) {
            stop = true
          } else if(currentNode.left && currentNode.right || currentNode.left) {
            currentNode = currentNode.left
          } else if(currentNode.right) {
            currentNode = currentNode.right
            stop = true
          } 
      }
      let newNode = new Node(currentNode.value)
      newNode.left = currentNode.left
      if(currentNode !== currentNode2.right){ 
        newNode.right = currentNode2.right
      }
      // console.log(newNode)
      if(!currentNode2.left && !currentNode2.right) {
        newNode = null
      }
      if(parentNode.value > currentNode.value) {
        //the node we're deleting is on the LEFT side for the prev node
        parentNode.left = newNode
      } else {
        //the node we're deleting is on the RIGHT side for the prev node
        parentNode.right = newNode
      }
      return this
    }
  }
  
  function traverse(node) {
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
  }
  
  const myBST = new BinarySearchTree()
  myBST.insert(9)
  myBST.insert(14)
  myBST.insert(20)
  myBST.insert(3)
  myBST.insert(2)
  myBST.insert(6)
  myBST.insert(5)
  myBST.insert(10)
  myBST.insert(170)
  // myBST.lookup(14)
  // myBST.remove(20)
  myBST.remove(3)
  myBST.remove(2)
  myBST.remove(170)
  myBST.remove(20)
  myBST.remove(6)
  
  JSON.stringify(traverse(myBST.root))
  
  //        9
  //    14     20
  //   1  6   5  170