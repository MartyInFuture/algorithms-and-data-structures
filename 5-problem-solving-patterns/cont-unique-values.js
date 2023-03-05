function countUniqueValues (valuesArr) {
  let idx = 0;
  for(let i = 0; i <= valuesArr.length; i++){
    if(valuesArr[idx] !== valuesArr[i]){
      valuesArr[idx + 1] = valuesArr[i]
      idx += 1 
    }
  }
  valuesArr.length = idx;
  // console.log(valuesArr)
  return idx
}


console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

