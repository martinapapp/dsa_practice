function sameFrequency(intOne, intTwo){
    intOne = intOne.toString();
    intTwo = intTwo.toString();
  if(intOne.length !== intTwo.length){
      return false;
  }
  let oneCounter = {};
  let twoCounter = {};
  
  for(const value of intOne){
      oneCounter[value] = (oneCounter[value] || 0) + 1
  }
  for (const value of intTwo){
      twoCounter[value] = (twoCounter[value] || 0) + 1
  }
  
  for (const key in oneCounter){
      if(!(key in twoCounter)){
          return false
      }
      if (oneCounter[key] !== twoCounter[key]){
          return false
      }
  }
  return true
}
