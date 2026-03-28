class Node{
    constructor(val, prio){
        this.val = val
        this.prio = prio
    }
}
class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, prio){
        let newNode = new Node(val, prio)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]

            if(element.prio >= parent.prio) break

            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx   
        }
        return this.values        
    }
    dequeue(){
        // edge case
        const min = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end
            this.bubbleDown()
        }
        return min
    }
    bubbleDown(){
        let i = 0
        const length = this.values.length

        while(true){
            const element = this.values[0]
            let leftChildIdx = 2 * i + 1
            let rightChildIdx = 2 * i + 2
            let leftChild, rightChild
            let swap = null         //tracking swap position

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx]
                if(leftChild.prio < element.prio){
                   swap = leftChildIdx 
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild.prio < element.prio) || 
                    (swap !== null && rightChild.prio < leftChild.prio)){
                        swap = rightChildIdx
                }
            }
            if(swap === null) break
            this.values[i] = this.values[swap]
            this.values[swap] = element

            i = swap
        }
    }
}

let ER = new PriorityQueue()
ER.enqueue('flu', 5)
ER.enqueue('car crash', 1)
ER.enqueue('dog bite', 3)
ER.enqueue('broken arm', 2)

console.log(ER)

ER.dequeue()
console.log(ER)

ER.dequeue()
console.log(ER)

