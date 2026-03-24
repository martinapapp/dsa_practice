class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let current = this.root
        while(true){
            if(value === current.value) return undefined
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if(current.right === null){
                    current.right = newNode
                    return this
                } 
                current = current.right
            }
        }
    }
    find(value){
        if(this.root === null) return false
        let current = this.root
        let found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return undefined
        return current
    }
    contains(value){
        if(this.root === null) return false
        let current = this.root
        let found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                return true
            }
        }
        return false
    }
    BFS(){
        let queue = []          //FIFO - nodes waiting to be visited
        let visited = []        //collect nodes level-by-level order
        let node = this.root    //define starting point

        queue.push(node)            //queue starts with root

        while(queue.length){            //loop as long as there are nodes waiting in the queue
            node = queue.shift()        //dequeue the front node
            visited.push(node.value)    //record it as visited

            if(node.left) queue.push(node.left)         //enqueue left child
            if(node.right) queue.push(node.right)       //enqueue right child
        }
        return visited      //return visited nodes
    }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.BFS()
    

