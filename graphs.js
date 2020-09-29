class Graph {
    constructor() {
      this.numberOfNodes = 0
      this.adjacentList = {}
    }
  
    addVertex(value) {
      this.adjacentList[value] = []
      this.numberOfNodes++
    }
    addEdge(val1, val2) {
      this.adjacentList[val1].push(val2)
      this.adjacentList[val2].push(val1)
    }
    showConnections() {
      for(let val in this.adjacentList) {
        console.log(val, this.adjacentList[val])
      }
    }
  }
  
  const myGraph = new Graph()
  myGraph.addVertex(0)
  myGraph.addVertex(1)
  myGraph.addVertex(4)
  myGraph.addVertex(10)
  
  myGraph.addEdge(10,4)
  myGraph.addEdge(10,0)
  myGraph.addEdge(1,4)
  
  myGraph.showConnections()