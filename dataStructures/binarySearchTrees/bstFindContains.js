/**find pseudo:
1. check if there' not a root : return undefined
2. save isFound as false
3. save current as root
4. loop
    check if value grater than current:
        set current to right
    check if value less than current:
        set current to left
    check if it is the same:
        retrun true
5. if not found : return undefined
6. retrun current
 */

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
        if(this.root === null) return undefined
        let current = this.root
        let isFound = false
        while(current && !isFound){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                isFound = true
            }
        }
        if(!isFound) return undefined
        return current
    }
    contains(value){
        if(this.root === null) return false
        let current = this.root
        let isFound = false
        while(current && !isFound){
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
}


//      10
//   5     13
// 2  7  11  16

let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)




