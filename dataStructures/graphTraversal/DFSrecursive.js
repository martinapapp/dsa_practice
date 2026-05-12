/** DFS (vertex)
 * store results in an array
 * store visited vertecis in an obj (A:true)
 * helper function
 *      if vertex is empty
 *          return (base case)
 *      mark vertex as visited
 *      add vertex to results list
 *      for each neighbour in vertex's neighbours:
 *          if neighbour is not visited
 *              recursively call helper on neighbour
 * invoke the helper function with starting vertex
 * return the results arr
 */

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

    DFS(start){
        let results = []
        let visited = {}

        const traversal = (v) => {      // for the inheritance must use arrow fn (or save this.adjencyList in outer scope )
            if(!v) return null          // base case
            visited[v] = true
            results.push(v)
            this.adjencyList[v].forEach(neighbour => {
                if(!visited[neighbour]){
                    return traversal(neighbour)
                }
            })
        }
        traversal(start)
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
//IF START WITH A, NEXT MOVE TO B
//DFS: [a, b, d, e, c, f]