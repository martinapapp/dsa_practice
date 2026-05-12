class WeightedGraph{
    constructor(){
        this.adjencyList = {}
    }
    addVertex(vertex){
        if(!this.adjencyList[vertex]) this.adjencyList[vertex] = []
    }
    addEdge(v1, v2, weight){
        this.adjencyList[v1].push({vertex:v2, weight})
        this.adjencyList[v2].push({vertex:v1, weight})
    }
}

let wgraph = new WeightedGraph()

wgraph.addVertex("A")
wgraph.addVertex("B")
wgraph.addVertex("C")

wgraph.addEdge("A","B",9)
wgraph.addEdge("A","C",5)
wgraph.addEdge("B","C",7)