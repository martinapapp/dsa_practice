/**
 * 1. transform string into number: use "a".charCodeAt(0) -96
 * 2. store total chars
 * 3. modulo, remainder: % 11 (valid array indices)
 */
function hash(key, arrLen){
    let total = 0
    for (let char of key){
        let value = char.charCodeAt(0) -96
        total = (total + value) % arrLen
    }
    return total
}

// problems with this hash function: only hashing strings, not constant time, could be a little more random

hash("pink", 10)
hash("maroon", 10)
hash("cyan", 10)