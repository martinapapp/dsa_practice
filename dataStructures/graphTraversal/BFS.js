/**BFS graph traveresal
 * accepts staring vertex
 * create queue and place here the start
 * store results
 * track visited vertices
 * mark start as visited
 * loop until queue is empty
 *      remove the first vertex from queueu and push it to result
 * for each vertex neighbours
 *      if it is not it results
 *          mark as visited and enqueu that vertex
 * return results
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
    BFS(start){
        let visited = {}
        let results = []
        let queue = [start]
        let currentVertex

        visited[start] = true

        while(queue.length){
            console.log(queue)
            currentVertex = queue.shift()
            results.push(currentVertex)

            this.adjencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
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
// if start with a, next move on to b and c
//BFS = [a, b, c ,d, e, f]