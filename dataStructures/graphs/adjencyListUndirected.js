 class Graph{
    constructor(){
        this.adjencyList = {}
    }

    /**
     * add vertex 
     * accepts name of the vertex
     * add key to list with the name of the vertex and set its value to be empty arr
     */
    addVertex(vertex){
        if(!this.adjencyList[vertex]){
            this.adjencyList[vertex] = []
        } 
    }
    /**
     * add edge
     * accepts two vertices
     * find the key of vertex1 and push vertex2 to the array
     * find the key of vertex2 and push vertex1 to the array 
    */
    addEdge(v1, v2){
        if(this.adjencyList[v1]) this.adjencyList[v1].push(v2)
        if(this.adjencyList[v2]) this.adjencyList[v2].push(v1)
    }
    /**
     * remove edge
     * accept 2 vertices
     * reassign the key of v1 to be an array that not contains v2
     * reassign the key of v2 to be an array that not contains v1
     */
    removeEdge(v1, v2){
        this.adjencyList[v1] = this.adjencyList[v1].filter(vertex => vertex !== v2)
        this.adjencyList[v2] = this.adjencyList[v2].filter(vertex => vertex !== v1)
    }
    /**
     * remove vertex
     * accpets vertex to remove
     * loop until as long as there are any other vertices in the list for that vertex
     *      call removeEdge with removing vertex
     * delete the key in the list for that vertex
     */
    removeVertex(vertex){
        while(this.adjencyList[vertex].length){                         // empty out vertex's array
            const adjencyListVertex = this.adjencyList[vertex].pop()
            this.removeEdge(vertex, adjencyListVertex)                  // remove vertex's connections
        }
        delete this.adjencyList[vertex]                              // remove vertex key
    }
 }

let g = new Graph()

g.addVertex("Paris")
g.addVertex("Helsinki")
g.addVertex("London")
g.addVertex("Budapest")
g.addVertex("Berlin")
g.addVertex("Vien")

g.addEdge("Paris", 'London')
g.addEdge('London', "Budapest")
g.addEdge('Vien', "Paris")
g.addEdge("Paris", "Berlin")
g.addEdge("Helsinki", "Berlin")
g.addEdge("Helsinki", "London")
g.addEdge("Helsinki", "Vien")


console.log(g)


