// sciped linear search cause it's too easy

// binary search
function binarySearch(arr, value){
  if(arr[0] > value || arr[arr.length - 1] < value) return -1

  const newArr = [...arr]
  let end = arr.length -1

  while(end >= 0){
      const halfArrIdx = Math.round(end / 2)
      console.log(newArr)
      if(newArr[halfArrIdx] === value) {
          return arr.indexOf(newArr[halfArrIdx])
      }else if(newArr[halfArrIdx] < value) {
          newArr.splice(0, halfArrIdx)
          end = newArr.length - 1
      }else if(newArr[halfArrIdx] > value) {
          newArr.splice(halfArrIdx, arr.length - 1)
          end = newArr.length - 1
      }
  }
  return -1
}

// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95));

console.log(binarySearch([1,2,3,4,5],5))