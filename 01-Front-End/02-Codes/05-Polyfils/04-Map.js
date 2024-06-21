
// Map

const arr = [1, 2, 3, 4, 5];

// Map use

const fnMulBy2 = (num) => {
  return num * 2;
}

let mulby2_1 = arr.map(fnMulBy2);
console.log(mulby2_1);


// 1. Map implementation using function

function map2(arr, callback, output = []) {
  for (let i = 0; i < arr.length; i++) {
    output.push(callback(arr[i]));
  }

  return output;
}

let mulBy2_2 = map2(arr, fnMulBy2);
console.log(mulBy2_2);


// 2. Map polyfil 

if (!Array.prototype.map2) {
  Array.prototype.map2 = function (callback, output = []) {
    for (let i = 0; i < this.length; i++) {
      output.push(callback(this[i]));
    }

    return output;
  }
}


const mulBy2_3 = arr.map2(fnMulBy2);
console.log(mulBy2_3);
