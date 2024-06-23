
// ForEach

const arr = [1, 2, 3, 4, 5];

// ForEach use

const callback = (item) => {
  console.log(item);
}

// Using forEach to log each number to the console
arr.forEach(function (number, index) {
  console.log(number, index);
});



// 1. ForEach implementation using function

function forEach2(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index], index, arr);
  }
}

forEach2(arr, callback);


// 2. ForEach polyfil 

if (!Array.prototype.forEach3) {
  Array.prototype.forEach3 = function (callback) {
    for (let index = 0; index < this.length; index++) {
      callback(this[index], index, this);
    }
  };
}

arr.forEach3(callback);

