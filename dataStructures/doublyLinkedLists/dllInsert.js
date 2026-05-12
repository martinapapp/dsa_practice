/**insert pseudo
0. accpet index, insertedvalue
1. check not valid index : return false
2. check index is 0 : use .push()
3. check index is equal length as list : use .unshift()
4. save and use .get() method on index-1 for beforeNode
5. save and create newnode for insertedvalue
6. save afterNode as beforeNodes's next prop 
7. set next and prev props to link
8. increment lenght
9. return true
 */

class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(newValue){
        let newNode = new Node(newValue)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length ++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null

        const middle = Math.floor(this.length/2)
        const isNearHead = index <= middle
        let current = isNearHead ? this.head : this.tail

        if(isNearHead){
            for(let i = 0; i < index; i ++) current = current.next
        }else{
            for(let i = this.length-1; i > index; i-- ) current = current.prev
        }
      return current
    }
    unshift(value){
        let newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length ++
        return this
    }
    insert(index, value){
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(value)
        if(index === this.length) return !!this.push(value)

        let beforeNode = this.get(index-1)
        let newNode = new Node(value)
        let afterNode = beforeNode.next

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode

        this.length++
        return true
    }
    
}

let list = new DoublyLinkedList()

list.push("Hello")
list.push("Doubly")
list.push("Linked")
list.push("List")
console.log(list)

console.log(list.get(-1))
console.log(list.get(10))
console.log(list.get(2))

console.log(list.set(7, "set not working"))

console.log(list.set(2, "Demo"))
