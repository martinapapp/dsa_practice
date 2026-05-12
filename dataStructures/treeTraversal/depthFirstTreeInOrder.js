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
    DFSInOrder(){
        let visited = []                //store visited nodes
        let current = this.root         //entry point define

        function traverse(node){                        // process the node in the middle, between its two children (order: left->current->right)
            if(node.left) traverse(node.left)           //explore deeply left side (leftmost node always visited first)
            visited.push(node.value)                    //visit the current node and add it to the visited nodes
            if(node.right) traverse(node.right)         //explore the right subtree
        }
        
        traverse(current)          //invoke helper funtion
        return visited             //return all visited nodes
    }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSInOrder()
    

