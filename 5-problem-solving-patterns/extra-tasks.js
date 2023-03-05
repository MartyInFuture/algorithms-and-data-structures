function sameFrequency(firstNum, secondNum){
  const firstNumArr = firstNum.toString().split('');
  const secondNumArr = secondNum.toString().split('');
  if(firstNumArr.length !== secondNumArr.length) return false
  const temp = {};
  firstNumArr.forEach((num) => temp[num] ? temp[num] += 1 : temp[num] = 1);
  for(let i = 0; i < secondNumArr.length; i++){
    if(!temp[secondNumArr[i]]){
      return false;
    }else {
      temp[secondNumArr[i]] -=1;
    }
  }
  return true
}

// console.log(sameFrequency(182,281))  // true
// console.log(sameFrequency(34,14))  // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

function areThereDuplicates() {
  const obj = {}
  for(let i = 0; i <= arguments.length; i++){
    if(obj[arguments[i]]) return true;
    obj[arguments[i]] = 1
  }
  return false
}

function areThereDuplicatesOneStringSolution(){
  return new Set(arguments).size !== arguments.length;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true



function averagePair(arr, target){
  if(arr.length < 2) return false;
  let start = 0; 
  let end = arr.length - 1;
  while(start < end){
    const avg = (arr[start] + arr[end]) / 2
    console.log('avg: ', avg);
    if(avg === target) return true
    else if(avg < target) start++
    else end--
  }
  return false
}

// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

function isSubsequence(firstStr, secondStr) {
  if(!firstStr.length || !secondStr.length || secondStr.length < firstStr.length) return false;
  let pointer = 0
  for(let i = 0; i <= secondStr.length; i++) {
    if(firstStr[pointer] === secondStr[i]) pointer++
    if(pointer === firstStr.length) return true
  }
  return pointer === firstStr.length
}

// console.log(isSubsequence('hello', 'hello world')); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)


function minSubArrayLen(arr, num) {
  if(arr.length < 1) return null;
  let total = 0;
  let start = 0;
  let end = arr.length - 1;
  arr.forEach(item => total+= item);
  if(total < num) return 0;
  while(start <= end){
    if(total < num) {
      return end - start + 2;
    } else if(start === end) {
      return 1
    }; 

    if(arr[start] > arr[end]){
      total -= arr[end];
      end--
    }else{
      total -= arr[start];
      start++
    }
    
  }
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
