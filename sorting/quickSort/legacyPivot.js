function pivot(arr, start = 0, end = arr.length) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  // pick the first element as the pivot
  var pivotValue = arr[start];
  var swapIdx = start;

  //loop
  for (var i = start + 1; i < end; i++) {
    //pivot counter & swap
    if (pivotValue > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // move the pivot from the start to its correct sorted position
  swap(arr, start, swapIdx);
  
  return swapIdx;
}




