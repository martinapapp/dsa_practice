/**insert pseudo
1. create new node
2. check empty : set root to newnode and return bst
3. save root as current

4. iterate over 
    4.1. edge case: check current value is the same as value : return undefined
    
    4.2. check value greater than current's value
        true : 
        check is there current's right prop
            true: set current to current's right node
            flase: set current's right to newnode, return bst 

        false :
        check is there current's left prop
            true: set current to current's left node
            flase: set current's left to newnode, return bst 
 */

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)

        if(!this.root){          
            this.root = newNode
            return this
        }

        let current = this.root 

        while(true){
            if(value === current.value) return undefined 

            if(value > current.value){
                if(!current.right){
                    current.right = newNode
                    return this
                }else{
                    current = current.right
                }
            }else{
                if(!current.left){
                    current.left = newNode
                    return this
                }else{
                    current = current.left
                }
            }
        }
    }
}

let bst = new BinarySearchTree()

bst.insert(5)
bst.insert(5)
bst.insert(3)
bst.insert(11)
bst.insert(89)
bst.insert(1)
console.log(bst)
