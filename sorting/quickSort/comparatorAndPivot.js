function pivot(arr, comparator, start = 0, end = arr.length) {
  // 1. Define a default comparator if one isn't provided
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }

  const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]]; // Modern destructuring swap
  };

  let pivotValue = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    // 2. Use the comparator instead of the '>' operator
    // We check if the pivot is 'greater than' the current element
    if (comparator(pivotValue, arr[i]) > 0) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}