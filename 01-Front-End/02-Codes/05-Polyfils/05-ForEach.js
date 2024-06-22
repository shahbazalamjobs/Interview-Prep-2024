
// ForEach

const arr = [1, 2, 3, 4, 5];

// ForEach use

const callback = (item) => {
  console.log(item);
}

// Using forEach to log each number to the console
arr.forEach(function (number) {
  console.log(number);
});



// 1. ForEach implementation using function

function forEach2(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}


forEach2(arr, callback);


// 2. ForEach polyfil 

if (!Array.prototype.forEach3) {
  Array.prototype.forEach3 = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  }
}

arr.forEach3(callback);

