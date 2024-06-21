
// Reduce 

const arr = [1, 2, 3, 4, 5];

// reduce usage 

let sum = arr.reduce((acc, item) => {
  return acc + item;
}, 0);

// console.log(sum);


// 1. Reduce function implementation 
function reduce1(arr, fn, initial = 0) {

  let accumulator = initial;

  for (const item of arr) {
    accumulator = fn(accumulator, item);
  }

  return accumulator;
}

const fnSum = (n1, n2) => {
  return n1 + n2;
}

let sum1 = reduce1(arr, fnSum, 0);
console.log(sum1);


// 2. Reduce polyfil 2

if (!Array.prototype.reduce2) {
  Array.prototype.reduce2 = function (callback, initial) {

    let accumulator = initial;
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  }
}

let sum3 = arr.reduce2(fnSum, 0);
console.log(sum3);


// 3. Reduce polyfil 3
