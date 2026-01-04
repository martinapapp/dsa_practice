//Frequency Counter pattern

// edge case length
// 2x empty obj counter
// 2x loops for..of (value of parameter)
    // 2x ha (ternary) mar letezik char counter +1, ha nincs akkor counter set 1
//for..in loop (key in counter) 
    //ha valamelyik key nincs a masikban (!(key in counter1))
    //ha a counter value nem egyezik (counter1[key] !== counter2[key])
// return true

function validAnagram(word, anagram){
    if(word.length !== anagram.length){
        return false;
    }
    let wordCharCounter = {};
    let anagramCharCounter = {};

    for (let value of word){
        wordCharCounter[value] = (wordCharCounter[value] || 0) + 1;
    }
    for (let value of anagram){
        anagramCharCounter[value] = (anagramCharCounter[value] || 0) + 1;
    }  
    for (let key in wordCharCounter){
        if(!(key in anagramCharCounter)){
            return false;
        }
        if(wordCharCounter[key] !== anagramCharCounter[key]){
            return false;
        }
    }
 return true;
}