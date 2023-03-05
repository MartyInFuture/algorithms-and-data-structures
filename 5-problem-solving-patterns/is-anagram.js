// my solution
function validAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) return false;
  const first = performance.now();
  const firstObj = {};
  const secondObj = {};
  firstWord.split("").forEach(item => firstObj[item] ? firstObj[item] += 1 : firstObj[item] = 1);
  secondWord.split("").forEach(item => secondObj[item] ? secondObj[item] += 1 : secondObj[item] = 1);
  for (const key in firstObj) {
    if (!(key in secondObj) || secondObj[key] !== firstObj[key]) return false
  }
  console.log(`${performance.now() - first} seconds`)
  return true;
}


console.log(validAnagram("", ""))
console.log(validAnagram("azz", "zaa"))
console.log(validAnagram("timetwist", "twisttime"))
console.log(validAnagram("timetwisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwist", "twisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwisttime"));

console.log('!!!!!!!!!!');


// solution from course
const isAnnagram2 = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) return false;
  const first = performance.now();
  const initObj = {};
  for (let i = 0; i < firstWord.length; i++) {
    const letter = firstWord[i];
    initObj[letter] ? initObj[letter] += 1 : initObj[letter] = 1;
  }
  for (let i = 0; i < secondWord.length; i++) {
    const letter = secondWord[i]
    if (!initObj[letter]) {
      return false;
    } else {
      initObj[letter] -= 1;
    }
  }
  console.log(`${performance.now() - first} seconds`);
  return true;
}

console.log('<empty string>', isAnnagram2("", ""));
console.log('azz zaa', isAnnagram2("azz", "zaa"));
console.log('timetwist twisttime', isAnnagram2("timetwist", "twisttime"));
console.log(isAnnagram2("timetwisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwist", "twisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwisttimetwisttime"));