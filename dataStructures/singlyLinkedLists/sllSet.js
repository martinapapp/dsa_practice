/**set pseudo
1. accept index and new value
2. use get method to find node
3. if found : update vale, return true
4. return false
 */

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
   
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    set(index, val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
}

let list = new SinglyLinkedList()

list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":)") 


