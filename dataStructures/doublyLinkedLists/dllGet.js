/**get pseudo
0. accept index number
1. check index is 0 or index >= length retrun null
2. save middle length
3. save is it near head (index is less-equal to middle)
4. save current (if near it is head, if not it is tail)
5. check isnearhead
    5.1. true: loop from start to index and set current to current's next prop
    5.2. false: loop from the end to index and set current to current's prev prop
6. return current
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
