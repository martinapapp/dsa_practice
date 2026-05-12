// Time Complexity: O(n)
// Space Complexity: O(1)

function isSubsequence(str1, str2) {
    let i = 0 // pointer for str1
    let j = 0 // pointer for str2

    if (!str1) return true // empty str1 is always a subsequence

    while (j < str2.length) { // loop through str2
        if (str2[j] === str1[i]) i++ // if characters match, move str1 pointer forward
        if (i === str1.length) return true // all characters in str1 were found in order
        j++ // always move str2 pointer forward
    }

    return false // str2 ended before all characters in str1 were found
}

// test calls
console.log(isSubsequence("hello", "hello world")) // true: all letters of "hello" appear in order
console.log(isSubsequence("sing", "sting")) // true: s, i, n, g appear in order
console.log(isSubsequence("abc", "abracadabra")) // true: a, b, c appear in order
console.log(isSubsequence("abc", "acb")) // false: characters exist, but not in the correct order
console.log(isSubsequence("", "abc")) // true: empty string is always a subsequence
console.log(isSubsequence("abc", "")) // false: cannot find characters inside an empty string
