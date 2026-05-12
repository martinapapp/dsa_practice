/**set pseudo
1. accept index, value
2. store foundNode (find it with .get())
3. check valid the foundNode
    3.1. true: set foundNode's value prop to accedted value,
                return true
4. return false
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
    set(index, value){
        let foundNode = this.get(index)
        if(foundNode !== null){
            foundNode.value = value
            console.log(this)
            return true
        }
        return false
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
