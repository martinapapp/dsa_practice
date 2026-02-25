/**insert pseudo
1. accept index and new value
3. edge cases:
    3.1. check index less than 0 or greater than length : return false
    3.2. check index is sam length : use push method
    3.3. check index is 0 : use unshift method
4. use get method (index-1) to get previous and save result
5. save temporarily the prev's next value (so it won't be erased)
5. set prev's next prop as new node
6. update newnode's next prop as saved temp value
7. this.length ++
8. return true
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
    push(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    
    unshift(val){
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
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
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return !!this.push(val)
        if(index === 0) return !!this.unshift(val)
        
        let newNode = new Node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
}

let list = new SinglyLinkedList()

list.push(100)
list.push(201)
list.push(250)
list.push(350)


