/**dijkstra approach
 * every time we look to visit a new node, we pick the node with the smallest known distance to visit first
 * once we've moved to the nose we're going to visti, we look at each of its neighbours
 * for each neighbouring node, we calculate the distance by summing the toal edges that lead to the node we're checking from the starting node
 * if the new total distance to a node is less than the previous total, we store hte niw shirter distance to a node is less than the previous total, we store the new shorter distance for that node 
 */

/**dijkstra pseudo
 * accepts start and end vertex
 * store distances in obj : start set to 0, others to infinity
 * add each vertex with a prio of infinity to the prio queue, except the starting vertex, which is 0 where we begin 
 * store previuosly visited vertices in an obj: initialize them as null
 * loop until all vertices in the prio queue
 *      dequeue a vertex from the pq
 *      if vertex is the same as ending vertex : done
 *      loop each value in the adjencylist at that vertex
 *          calculate the distance to that vertex from starting vertex
 *          if dist is less than what is currently stored in dist obj
 *              update the dist obj with new lower dist
 *              update the prev obj to contain the vertex
 *              enqueue the vertex with the total dist from starting vertex
 * 
 * |vertex|  distance|
 * ------------------
 * |   A  |    0    |
 * |   B  |inifinity|
 * 
 * Visited = []
 * 
 * Previous = {
 *      A : null
 *      B : null
 * }
 * 
 */
class Node{
    constructor(val, prio){
        this.val = val
        this.prio = prio
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, prio){
        let newNode = new Node(val, prio)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]

            if(element.prio >= parent.prio) break

            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx   
        }
        return this.values        
    }
    dequeue(){
        // edge case
        const min = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.bubbleDown()
        }
        return min
    }
    bubbleDown(){
        let i = 0
        const length = this.values.length

        while(true){
            const element = this.values[0]
            let leftChildIdx = 2 * i + 1
            let rightChildIdx = 2 * i + 2
            let leftChild, rightChild
            let swap = null         //tracking swap position

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild.prio < element.prio){
                   swap = leftChildIdx 
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild.prio < element.prio) || 
                    (swap !== null && rightChild.prio < leftChild.prio)){
                        swap = rightChildIdx
                }
            }
            if(swap === null) break
            this.values[i] = this.values[swap]
            this.values[swap] = element

            i = swap
        }
    }
}

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
    dijkstra(start, finish){
        const nodes = new PriorityQueue()
        let distances = {}
        let prev = {}
        let path = []
        let smallest

        //build inititale state
        for(let vertex in this.adjencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            }else{
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            prev[vertex] = null
        }
    
        while(nodes.values.length){                     // as long as there's something to visit
            smallest = nodes.dequeue().val
            if(smallest === finish){
                while(prev[smallest]){
                    path.push(smallest)
                    smallest = prev[smallest]
                }
                break;
            }
            if(smallest && distances[smallest] !== Infinity){
                for(let neighbour in this.adjencyList[smallest]){
                    let nextNode = this.adjencyList[smallest][neighbour]        // find neighbouring node
                    let candidate = distances[smallest] + nextNode.weight       // calc new distance to neighbourning node
                    let nextNeighbour = nextNode.vertex
                    if(candidate < distances[nextNeighbour]){                   // compare new dist with stored dist
                        distances[nextNeighbour] = candidate                    // update new smallest dist to neighbour
                        prev[nextNeighbour] = smallest                          // update prev - how we got to neighbour
                        nodes.enqueue(nextNeighbour, candidate)                 // enqueue in pq with new prio
                    }
                }
            }
        }
        return path.concat(smallest).reverse()
    }

}

let wgraph = new WeightedGraph()

wgraph.addVertex("A")
wgraph.addVertex("B")
wgraph.addVertex("C")
wgraph.addVertex("D")
wgraph.addVertex("E")
wgraph.addVertex("F")


wgraph.addEdge("A","B",4)
wgraph.addEdge("A","C",2)
wgraph.addEdge("B","E",3)
wgraph.addEdge("C","D",2)
wgraph.addEdge("C","F",4)
wgraph.addEdge("D","E",3)
wgraph.addEdge("D","F",1)
wgraph.addEdge("E","F",1)

//            4
//       A  -----  B
//   2 /  2      3    \  3
//  C ------ D ------  E          
//    \       \ 1     /
//    4  \     \    /   1
//             F   


wgraph.dijkstra("A", "E")
// solution: [A, C, D, F, E]
