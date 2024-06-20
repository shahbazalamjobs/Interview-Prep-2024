
// filter 

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];

// use
arr.filter((item, index) => {
  if (item > 3) {
    console.log("Index: " + index + " -> Item: " + item);
  }
});


// 1. filter function implementation

const filter1 = (arr, fn, output = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      output.push(arr[i]);
    }
  }

  return output;
}

const even = (num) => {
  if (num % 2 === 0) {
    return 1;
  } else {
    return 0;
  }
}


const filOutput1 = filter1(arr, even);
console.log("filOutput1: " + filOutput1);


// 2. filter polyfil implementation

if (!Array.prototype.filter2) {
  Array.prototype.filter2 = function (fn) {
    function filterFunc(arr, fn, output = []) {
      for (let item of arr) {
        if (fn(item)) {
          output.push(item);
        }
      }
      return output;
    }

    return filterFunc(this, fn);
  }
}

const filOutput2 = arr.filter2((item) => {
  if (item > 2) {
    return 1;
  }
});
console.log("filOutput2: " + filOutput2);


