class Graph{
    constructor(){
        this.adjencyList = {}
    }
    addVertex(vertex){
        if(!this.adjencyList[vertex]) this.adjencyList[vertex] = []
    }
    addEdge(v1, v2){
        if(this.adjencyList[v1]) this.adjencyList[v1].push(v2)
        if(this.adjencyList[v2]) this.adjencyList[v2].push(v1)
    }

    /**DFS iterative (start vertex)
     * create stack for tracking vertices
     * store results
     * track visited vertices
     * add start to stack and mark visited
     * while s is not empty
     *      pop the next vertex from stack
     *      if vertex is not visited
     *          mark it as visited
     *          add to results
     *          push all its neighbours into the stack (foreach)
     * return results
     */
    DFS(start){
        let stack = [start]
        let visited = {}
        let results = []
        let currentVertex

        visited[start] = true

        while(stack.length){
            console.log(stack)
            currentVertex = stack.pop()
            results.push(currentVertex)
            
            this.adjencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            })
        }
        return results
    }
}

let g = new Graph()

g.addVertex("a")
g.addVertex("b")
g.addVertex("c")
g.addVertex("d")
g.addVertex("e")
g.addVertex("f")

g.addEdge("a","b")
g.addEdge("a","c")
g.addEdge("b","d")
g.addEdge("c","e")
g.addEdge("d","e")
g.addEdge("d","f")
g.addEdge("e","f")

console.log(g)

    //        a       
    //   /         \
    // b             c
    // |             |
    // d ----------- e
    //   \         /
    //        f 
//IF START WITH A, NEXT MOVE ON TO C
//DFS = [a, c, e, f, d, b]