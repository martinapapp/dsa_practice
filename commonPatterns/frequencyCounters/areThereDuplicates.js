//frequnecy counter dupliactes

function areThereDuplicates(...args){
    // 1. declare empty obj to collect ferqs
    // 2. loop through in args values and set them as key-value pairs in collection
    // 3. loop through keys and if value is bigger than 1 return true
    // 4. return false

    let collection = {}
    for (let value of args){
        collection[value] = (collection[value] || 0) +1
    }
    for (let key in collection){
        if(collection[key] > 1) return true
    }
    return false
}

console.log(areThereDuplicates(1, 2, 3))        // false
console.log(areThereDuplicates(1, 2, 2))        // true
console.log(areThereDuplicates('a', 'b', 'c'))  // false
console.log(areThereDuplicates('a', 'b', 'a'))  // true
console.log(areThereDuplicates(1, 2, 3, 4, 5))  // false
console.log(areThereDuplicates(1, 1, 1, 2, 3))  // true
console.log(areThereDuplicates())               // false

