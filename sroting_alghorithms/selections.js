const selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++){
    let lowest = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[lowest] > arr[j]){
        lowest = j
      }
    }
    if(i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]))