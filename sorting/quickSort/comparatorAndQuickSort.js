function pivot(arr, comparator, start = 0, end = arr.length) {
  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
  };

  let pivotValue = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    // If pivotValue is "greater than" current element
    if (comparator(pivotValue, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Move pivot to its final destination
  swap(arr, start, swapIdx);
  return swapIdx;
}

//------------------------------------------------------------------------------------------

function quickSort(arr, comparator, left = 0, right = arr.length) {
  // Default comparator if none provided (sorts numbers/strings ascending)
  if (typeof comparator !== 'function') {
    comparator = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
  }

  // Base case: If the range has more than 1 element
  if (left < right - 1) {
    let pivotIndex = pivot(arr, comparator, left, right);

    // Recursively sort Left side
    quickSort(arr, comparator, left, pivotIndex);

    // Recursively sort Right side
    quickSort(arr, comparator, pivotIndex + 1, right);
  }

  return arr;
}

//Examples

// quickSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// quickSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// quickSort([1, 2, 3]); // [1, 2, 3]
// quickSort([]);
 
// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// quickSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }
 
// quickSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
// var moarKittyData = [{
//   name: "LilBub",
//   age: 7
// }, {
//   name: "Garfield",
//   age: 40
// }, {
//   name: "Heathcliff",
//   age: 45
// }, {
//   name: "Blue",
//   age: 1
// }, {
//   name: "Grumpy",
//   age: 6
// }];
 
// function oldestToYoungest(a, b) {
//   return b.age - a.age;
// }
 
// quickSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
