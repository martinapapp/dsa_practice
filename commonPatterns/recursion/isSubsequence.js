// Time Complexity: O(n)
// Space Complexity: O(n)

function isSubsequence(str1, str2) {
  if (str1.length === 0) return true // all characters in str1 were found in order
  if (str2.length === 0) return false // str2 ended before all characters in str1 were found

  if (str2[0] === str1[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1)) // matching character found, move forward in both strings
  }

  return isSubsequence(str1, str2.slice(1)) // no match, move forward only in str2
}

// test calls
console.log(isSubsequence("hello", "hello world")) // true: all letters of "hello" appear in order
console.log(isSubsequence("sing", "sting")) // true: s, i, n, g appear in order
console.log(isSubsequence("abc", "abracadabra")) // true: a, b, c appear in order
console.log(isSubsequence("abc", "acb")) // false: characters exist, but not in the correct order
console.log(isSubsequence("", "abc")) // true: empty string is always a subsequence
console.log(isSubsequence("abc", "")) // false: cannot find characters inside an empty string