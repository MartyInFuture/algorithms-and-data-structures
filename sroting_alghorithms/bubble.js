// bubble sort v1.0
const bubbleSort = (arr) => {
  for(let i = 0; i< arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[j] > arr[j + 1]){
        // swap es5
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([37, 45, 29, 8]))

// bubble sort v1.1

const bubbleSort1 = (arr) => {
  for(let i = arr.length; i >  0; i--){
    let swapped = false
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        // swap es2015
        [arr[j], arr[j+ 1]] = [arr[j+1], arr[j]];
        swapped = true
      }
    }
    if(!swapped) return arr;
  }
  return arr;
}

console.log(bubbleSort1([37, 45, 29, 8]))
console.log('final: ', bubbleSort1([10, 1, 2, 3, 4, 5, 6, 7]))