/**get pseudo
1. accept index
2. if index less than 0 or greater-equal to length : return null
3. set counter to 0
4. set current as head
5. loop until reaching index
    5.1. set current as next prop
    5.2. counter incerement by 1
6.return current
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
}

let list = new SinglyLinkedList()

list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":)") 


