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
    DFSPostOrder(){
        let visited = []                //create space for visited nodes
        let current = this.root         //starting point define

        function traverse(node){                    //process the node last, after both children are fully explored (order: left->right->current)
            if(node.left) traverse(node.left)       //explore left deeply before coming back up
            if(node.right) traverse(node.right)     //explore right deeply before coming back up
            visited.push(node.value)                //visit the node and add to visited nodes (root is always visited last)
        }
        traverse(current)       //invoke the helper function
        return visited          //retrurn all visited nodes
    }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSPostOrder()
    

