function insertionSort(arr, comparator) {
  // If no comparator is provided, use a default numeric/string comparison
  if (typeof comparator !== 'function') {
    comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
  }

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;

    // shifting elements as long as the comparator says arr[j] is greater than currentValue
    while (j >= 0 && comparator(arr[j], currentValue) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentValue;
  }
  
  return arr;
}