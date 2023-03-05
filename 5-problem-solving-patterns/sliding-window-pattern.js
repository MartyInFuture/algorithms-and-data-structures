// Task (Max subarray sum): we have array, ex: [1, 4, 5, 13, 5, 6] and number, ex: 3. 
// The task is to find the bigger sum of number in array in a row, here we have 24 sum from subarray [13, 5, 6]

// Naive solution (two for loop)
function naive(arr, number) {
  if(number > arr.length) return null

  let maxSum = -Infinity
  for(let i = 0; i <= arr.length - number; i++){
    let temp = 0;
    for(let j = 0; j < number; j++){
      temp += arr[j + i];
    }
    maxSum = Math.max(temp, maxSum)
  }
  return maxSum
}

console.log(naive([1, 4, 5, 13, 5, 6], 3))

// Sliding window pattern 
function slidingWindowPattern(arr, number){
  if(number > arr.length) return null
  let maxSum = 0;
  let temSum = 0;
  for(let i = 0; i < number; i++){
    maxSum += arr[i];
  }
  temSum = maxSum;
  for(let i = number; i < arr.length; i ++){
    temSum = temSum - arr[i - number] + arr[i]
    maxSum = Math.max(temSum, maxSum)
  }
  return maxSum
}

console.log(slidingWindowPattern([1, 4, 5, 13, 5, 6], 3))