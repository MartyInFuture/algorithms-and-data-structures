const same = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  const first = performance.now();
  let isTrue = true;
  const firstSortedArr = firstArr.sort((a, b) => a - b);
  const secondSortedArr = secondArr.sort((a, b) => a - b);
  firstSortedArr.forEach((item, idx) => item ** 2 !== secondSortedArr[idx] ? isTrue = false : item);
  console.log(`${performance.now() - first} seconds`)
  return isTrue;
}

console.log(same([1, 2, 3], [4, 1, 9])) // true;
console.log(same([1, 2, 3], [1, 9])) //false;
console.log(same([1, 2, 1], [4, 4, 1])) // false (must be same frequency)

console.log('!!!!!!!!!')

// frequency counter pattern
const same2 = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  const first = performance.now();
  const firstArrFrequencyCounter = {}
  const secondArrFrequencyCounter = {}
  firstArr.forEach((item) => firstArrFrequencyCounter[item] ? firstArrFrequencyCounter[item] += 1 : firstArrFrequencyCounter[item] = 1)
  secondArr.forEach((item) => secondArrFrequencyCounter[item] ? secondArrFrequencyCounter[item] += 1 : secondArrFrequencyCounter[item] = 1)
  for (const key in firstArrFrequencyCounter) {
    if (!(key ** 2 in secondArrFrequencyCounter) || secondArrFrequencyCounter[key ** 2] !== firstArrFrequencyCounter[key]) return false;
  }
  console.log(`${performance.now() - first} seconds`)
  return true;
}

console.log(same2([1, 2, 3], [4, 1, 9])) // true;
console.log(same2([1, 2, 3], [1, 9])) //false;
console.log(same2([1, 2, 1], [4, 4, 1])) // false (must be same frequency)


