function validAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) return false;
  const firstObj = {};
  const secondObj = {};
  firstWord.split("").forEach(item => firstObj[item] ? firstObj[item] += 1 : firstObj[item] = 1);
  secondWord.split("").forEach(item => secondObj[item] ? secondObj[item] += 1 : secondObj[item] = 1);
  for (const key in firstObj) {
    if (!(key in secondObj) || secondObj[key] !== firstObj[key]) return false
  }
  return true;
  // add whatever parameters you deem necessary - good luck!
}


console.log(validAnagram("", ""))
console.log(validAnagram("azz", "zaa"))
console.log(validAnagram("timetwist", "twisttime"))