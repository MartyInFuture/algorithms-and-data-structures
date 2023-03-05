const power = (num, pow) => pow === 0 ? 1 : num * power(num, pow -1)


// console.log(power(2, 0)) // 2
// console.log(power(2, 2)) // 4
// console.log(power(2, 4)) // 16

const factorial = (num) => num < 0 ? 0 : num <= 1 ? 1 : num * factorial(num - 1);

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

const productOfArray = (arr) => arr.length === 1 ? arr [0] : arr[0] * productOfArray(arr.slice(1)); 


// console.log(productOfArray([1, 2, 3])) // 6
// console.log(productOfArray([1, 2, 3, 10])) // 60

const recursiveRange = (num) => num > 0 ? num + recursiveRange(num - 1) : 0;

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55


const fib = (num) => num <= 2 ? 1 : fib(num - 1) + fib(num - 2);

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) //317811
console.log(fib(35)) // 9227465
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465