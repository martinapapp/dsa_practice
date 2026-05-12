let groupAnagrams = function(strs) {
    let store = {}
    for(let word of strs){
        let common = word.toLowerCase().split('').sort().join('')
        if(store[common]){
            store[common].push(word)
        }else{
            store[common] = [word]
        }
    }
    return Object.values(store)
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"])
