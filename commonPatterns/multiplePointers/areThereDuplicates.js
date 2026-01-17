// first way:
// O(n) time & space
function areThereDuplicates(...args) {
  let collection = {};
  //iterate over args
  for (let arg of args) {
    // If the value is already in our object
    if (collection[arg]) {
      return true;
    }
    collection[arg] = 1;
  }
  return false;
}

// second way:
// O(n log n) time,  O(1) space
function areThereDuplicates(...args) {
  // Sort the arguments (Note: default sort is string-based)
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  // Use two pointers to compare neighbors
  let start = 0;
  let next = 1;
  // loop until the end 
  while (next < args.length) {
    //if current and next same exit loop as true
    if (args[start] === args[next]) {
      return true;
    }
    //otherwise move further by 1 step each pointers
    start++;
    next++;
  }
  //at the end if no duplicates false
  return false;
}

//third way
//O(n log n) time, O(1) space
function areThereDuplicates(...args) {
    // Sort first 
    args.sort(); 
    // init neighbour pointers
    let i = 0;
    let j = 1;
    //check until the end
    while (j < args.length) {
        if (args[i] === args[j]) {
            return true; // Found them!
        }
        i++;
        j++;
    }

    return false;
}

//fourth way:
//O(n) time & space
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}