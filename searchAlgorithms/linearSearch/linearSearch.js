/*
Algorithm: Linear Search 
Input: array of numbers, and target
Output: index of target in array, or -1 if not found

(this is happening behind the scenes when using: numbers.indexOf('target'))

Steps:
1. Loop over the array:
2.   If the element is the target:
3.     Return the index.
4. Return -1.
*/

function linearSearch(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i
    }
  }
  return -1
}

//short version:
//--------------------------------------------------------
// function linearSearch(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) return i
//   }
//   return -1
// }
//-------------------------------------------------------------

// Time complexity: O(n)
// Space complexity: O(1)