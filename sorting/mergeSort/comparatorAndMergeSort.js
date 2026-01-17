function merge(arr1, arr2, comparator){
    if(typeof comparator !== 'function'){
        comparator = (a,b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0
        }
    }
        
    let results = []
    
    let i = 0
    let j = 0
    
    
    while(i < arr1.length && j < arr2.length){
        if (comparator(arr1[i], arr2[j]) < 0) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    
    return results
}

//mergeSort--------------------------------------------------------------------------------

function mergeSort(arr, comparator){
    if(typeof comparator !== 'function'){
      comparator = (a,b) =>{
          if(a < b) return -1;
          if(a > b) return 1;
          return 0
      }
  }
  
  if(arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid), comparator)
  let right = mergeSort(arr.slice(mid), comparator)
  
  return merge(left, right, comparator)
}