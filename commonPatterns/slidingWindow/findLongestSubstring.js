// Time Complexity: O(n)
// Space Complexity: O(n)

function findLongestSubstring(str) {
    let longest = 0 // stores the length of the longest substring found so far
    let seen = {} // stores the last seen position of each character
    let start = 0 // start index of the current window

    for (let i = 0; i < str.length; i++) { // move through the string one character at a time
        let char = str[i] // current character

        if (seen[char]) { // if character was seen before
            start = Math.max(start, seen[char]) // move start after the previous occurrence if needed
        }

        longest = Math.max(longest, i - start + 1) // update longest window length
        seen[char] = i + 1 // store next position after current character
    }

    return longest // return the longest substring length without repeating characters
}

// test calls
console.log(findLongestSubstring("")) // empty string has no substring
console.log(findLongestSubstring("rithmschool")) // "rithmsc"
console.log(findLongestSubstring("thisisawesome")) // "awesom"
console.log(findLongestSubstring("thecatinthehat")) // "hecatin"
console.log(findLongestSubstring("bbbbbb")) // only one unique character at a time
console.log(findLongestSubstring("longestsubstring")) //  "ubstring"
console.log(findLongestSubstring("thisishowwedoit")) // "wedoit"