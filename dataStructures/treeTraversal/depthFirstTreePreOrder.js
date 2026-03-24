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
    DFSPreOrder(){
      let visited = []                  //create space for collect visited nodes
      let current = this.root           //define starting point
      
      function traverse(node){                  //recursion helper function (order: current->left->right)
        visited.push(node.value)                //add node to visited (visit current node before its children)
        if(node.left) traverse(node.left)       //if can go left - traverse the entire left subtree first
        if(node.right) traverse(node.right)     //only after the entire left suvtree is exhausted go right
      }
      traverse(current)         //invoke helper function
      return visited            // return all visited nodes
    }
}


let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
tree.DFSPreOrder()
    

