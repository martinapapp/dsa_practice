function countUniqueValues(sortedArr){
    
    //multiple pointers
    // i
    //[1, 2, 2, 3, 3, 3, 4, 4,, 5, 6]
    //    j

    if (sortedArr.length === 0) return 0;
    let i = 0
    for (let j = 1; j < sortedArr.length; j++){
        if(sortedArr[i] !== sortedArr[j]){
            i++
            sortedArr[i] = sortedArr[j]
        }
    }
  return i + 1
}