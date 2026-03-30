/**
 * this implementation only gets the first pair if there's duplicates
*/

class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size)       // Initialize the hash table with a fixed-size array
    }

    _hash(key) {
        let total = 0       // Start with a total of 0
        let prime = 31      // Prime number used to reduce collisions

        for (let i = 0; i < Math.min(key.length, 100); i++){        // Loop through up to 100 characters of the key
            let char = key[i]                                       // get current character
            let value = char.charCodeAt(0) - 96                     // get alphabetic rank
            total = (total * prime + value) % this.keyMap.length    // Update total using prime multiplication and modulo to stay within array bounds
        }
        return total        // Return the computed index
    }

    set(key, value){
        let index = this._hash(key)                 // Hash the key to get an index
        if(!this.keyMap[index]){                    // If no bucket exists at this index, create one (for handling collisions)
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])      // Push the key-value pair into the bucket (chaining)
    }

    get(key){
        let index = this._hash(key)                                 // Hash the key to find the index
        if(this.keyMap[index]){                                     // If something exists at this index
            for(let i= 0; i < this.keyMap[index].length; i++){      // Loop through all pairs in the bucket
                if(this.keyMap[index][i][0] === key){               // Check if the key matches
                    return this.keyMap[index][i]                    // Return the full [key, value] pair
                }
            }
        }
    }
    
    values(){   // get all unique values
        let valuesArr = []
        for(let i =0; i< this.keyMap.length; i++){                       // Loop through all buckets
            if(this.keyMap[i]){                                
                for(let j=0; j< this.keyMap[i].length; j++)              // Loop through each pair in the bucket
                    if(!valuesArr.includes(this.keyMap[i][j][1]))        // Avoid duplicates
                    valuesArr.push(this.keyMap[i][j][1])
            }
        }
        return valuesArr
    }

    keys(){    // get all unique keys
        let valuesArr = []
        for(let i =0; i< this.keyMap.length; i++){                      // Loop through all buckets
            if(this.keyMap[i]){
                for(let j=0; j< this.keyMap[i].length; j++)             // Loop through each pair in the bucket
                    if(!valuesArr.includes(this.keyMap[i][j][0]))       // Avoid duplicates
                    valuesArr.push(this.keyMap[i][j][0])
            }
        }
        return valuesArr
    }
}

// Create a new hash table instance
let ht = new HashTable()

// Insert key-value pairs (color name - hex code)
ht.set("white", "#FFFFFF")
ht.set("black", "#000000")
ht.set("red", "#FF0000")
ht.set("green", "#00FF00")
ht.set("blue", "#0000FF")
ht.set("yellow", "#FFFF00")
ht.set("cyan", "#00FFFF")
ht.set("magenta", "#FF00FF")
ht.set("gray", "#808080")
ht.set("orange", "#FFA500")
ht.set("pink", "#FF00FF") // duplicate value intentionally

// Print the full hash table structure
console.log(ht)

// Retrieve and print the pair for "yellow"
console.log(ht.get("yellow"))