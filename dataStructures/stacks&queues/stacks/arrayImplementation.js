//LIFO

//.push() & .pop()
let stack = []

stack.push('first')
console.log(stack)
stack.push('second')
console.log(stack)
stack.push('third')
console.log(stack)
stack.push('last in first out')
console.log(stack)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack)





//.unshift() & .shift()
let s = []

s.unshift('first')
console.log(s)
s.unshift('second')
console.log(s)
s.unshift('third')
console.log(s)
s.unshift('last in first out')
console.log(s)

console.log(s.shift())
console.log(s.shift())
console.log(s.shift())
console.log(s.shift())
