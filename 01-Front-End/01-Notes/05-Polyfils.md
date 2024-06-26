# Polyfils

- JavaScript continually evolves and add new features every year, so older browsers dont support modern functionalities. To solve this gap, developers use two main tools: `Transpilers and Polyfils`

1. **Transpilers**: It translate source code from one form to another. They can parse modern JavaScript code and rewrite it using older syntax. Eg. Babel.
Example:
```javascript
// Modern code using arrow functions
const add = (a, b) => a + b;

// Transpiled code for older browsers
var add = function(a, b) {
  return a + b;
};
```

2. **Polyfills**: Fill in missing features in older browsers by providing replacement code.

- In JavaScript, "polyfills" are code snippets or libraries used to provide modern functionality in older browsers that lack support for certain features.
- These features could be new JavaScript methods, APIs, or other functionalities introduced in newer versions of the language or browser environments.
- Polyfills typically work by detecting whether a certain feature is supported in the current browser, and if not, they provide an alternative implementation to mimic the behavior of the missing feature.

Example:
```javascript
// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/) {
    // Implementation code here
  };
}
```

---

## Common Polyfils 

### Polyfill for Array.flat()
```js
const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

function myFlat(arr, depth = 1, output = []) {
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      myFlat(item, depth - 1, output);
    } else {
      output.push(item);
    }
  }
  return output;
}

console.log(myFlat(arr, 10));


```


```js
if (!Array.prototype.flat) {
  Array.prototype.flat = function(depth = 1) {
    // Check if the given depth is a number and non-negative
    if (typeof depth !== "number" || depth < 0) {
      throw new TypeError("Depth must be a non-negative number");
    }

    // Initialize the flattened array
    const flatten = (arr, depth) => {
      return arr.reduce((acc, val) => {
        // If the current element is an array and depth is not zero
        if (Array.isArray(val) && depth > 0) {
          // Recursively flatten the array and decrease depth by 1
          acc.push(...flatten(val, depth - 1));
        } else {
          // Otherwise, push the current element to the flattened array
          acc.push(val);
        }
        return acc;
      }, []);
    };

    return flatten(this, depth);
  };
}

// Example usage
const arr = [1, [2, [3, [4, 5]]]];
console.log(arr.flat()); // Outputs: [1, 2, [3, [4, 5]]]
console.log(arr.flat(1)); // Outputs: [1, 2, [3, [4, 5]]]
console.log(arr.flat(2)); // Outputs: [1, 2, 3, [4, 5]]
console.log(arr.flat(3)); // Outputs: [1, 2, 3, 4, 5]

```


---

### Polyfill for Array.filter()
```js
function myFilter(arr, fn, output = []) {
  arr.forEach((element) => {
    if (fn(element)) {
      output.push(element);
    }
  });
  return output;
}

const isEven = (num) => {
  return num % 2 === 0;
};

const arr = [1, 2, 3, 4, 5, 6, 6, 6, 9];

const onlyEvenElements = myFilter(arr, isEven);

console.log(onlyEvenElements);
```


---

### Polyfill for Array.reduce()
```js
const add = (acc, curr) => {
  return acc + curr;
};

function myReduce(arr, callBack, init = 0) {
  let res = init;
  arr.forEach((item) => {
    res = callBack(res, item);
  });

  return res;
}

const arr = [1, 2, 3, 4, 5];

console.log(myReduce(arr, add, 0));
```

```js
// Define the custom reduce1 method on Array.prototype
Array.prototype.reduce1 = function(callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};
```


---

### Polyfill for Array.map()
```js
function doubleVals(item) {
  return item * 2;
}

const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

console.log(arr.myMap(doubleVals));
```



### Polyfill for Array.forEach()
```js

// ForEach

const arr = [1, 2, 3, 4, 5];


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

```

---

### Polyfill for Function.call()

```js
  
// Call

// usage

function printAge(age) {
  console.log(`${this.name} age is ${age}`);
}

person1 = {
  name: "Shahbaz Alam",
}

// printAge.call(person1, 25);


// 1. function implementation

function myCall1(obj = {}, fn, ...args) {
  obj.fn = fn;
  const result = obj.fn(...args);
  delete obj.fn; 

  return result;
}

myCall1(person1, printAge, 30);


// 2. polyfil for call

if (!Function.prototype.call2) {
  Function.prototype.call2 = function (context, ...args) {
    context = context || globalThis;

    // Create new property to avoid collision with existing property in obj
    const tempFn = Symbol('tempFn');  // used symbol for unique obj prop name
    context[tempFn] = fn;

    const result = context[tempFn](...args);

    // delete temporary property from the context object
    delete context[tempFn];

    return result;

  }
}

printAge.call(person1, 28);
```

---

### Polyfill for Function.apply()

```js
// apply

function printAge(age) {
  console.log(`${this.name} age is ${age}`);
}

const person1 = {
  name: "Shahbaz",
}

// usage 

// printAge.apply(person1, [26]);

// 1. function implementation of apply
function apply1(context, fn, args = []) {
  context.fn = fn;
  const result = context.fn(...args);
  delete context.fn;

  return result;
}

apply1(person1, printAge, [36]);

// 2. apply implementation polyfil
if(!Function.prototype.apply2) {
  Function.prototype.apply2 = function(context, args = []) {
    context = context || globalThis;

    const tempFn =  Symbol('fn'); // Use a Symbol to ensure a unique property name
    context[tempFn] = this;
    const result = context[tempFn](...args);

    delete context[tempFn];
    return result;
  }
}

printAge.apply(person1, [32]);
```



---

### Polyfill for Function.bind()

```js

// Bind

// Usage

function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: 'Ankit',
  lastName: 'Saxena'
};

// bind usage

const boundPrintName = printName.bind(myName, "Palia");
boundPrintName("India");


// 1. Function implementation of bind

function bind1(context, fn, ...args) {

  return function(...innerArgs) {
    const result = fn.call(context, ...args, ...innerArgs);
  }
}

bind1(myName, printName, "Pune", "India")();


// 2. Implemetation of bind polyfil

if (!Function.prototype.bind2) {
  Function.prototype.bind2 = function (context, ...args) {
    const callback = this;

    return function (...innerArgs) {
      return callback.call(context, ...args, ...innerArgs);
    };
  }
}

const result2 = printName.bind2(myName, "Palia");
result2("India");
```

---

### Polyfill for curry()

- Simple and better
```js
function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        else {
            return function(...innerArgs){
                return curried(...args, ...innerArgs);
            }
        }
    }
}

```

- Complicated but using this and apply
```js
// Curry function polyfill
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1, 2, 3)); // Outputs: 6
console.log(curriedAdd(1)(2)(3)); // Outputs: 6
console.log(curriedAdd(1, 2)(3)); // Outputs: 6
console.log(curriedAdd(1)(2, 3)); // Outputs: 6

```

---

### Polyfill for Promise()

```js

// source: https://roadsidecoder.hashnode.dev/javascript-interview-questions-promises-and-its-polyfills


function PromisePolyFill(executor) {
    let onResolve,
        onReject,
        fulfilled = false,
        rejected = false,
        called = false,
        value;
  
    function resolve(v) {
      fulfilled = true;
      value = v;
  
      if (typeof onResolve === "function") { // for async
        console.log("inside resolve")
        onResolve(value);
        called = true;
      }
    }
  
    function reject(reason) {
      rejected = true;
      value = reason;
  
      if (typeof onReject === "function") {
        onReject(value);
        called = true;
      }
    }
  
    this.then = function (callback) {
      onResolve = callback;
  
      if (fulfilled && !called) { // for sync
        console.log("inside then")
        called = true;
        onResolve(value);
      }
      return this;
    };
  
    this.catch = function (callback) {
      onReject = callback;
  
      if (rejected && !called) {
        called = true;
        onReject(value);
      }
      return this;
    };
  
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  
  const promise1 = new PromisePolyFill((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        resolve(2)
      }, 1000);
    console.log(3)
  })
  
  promise1.then(res => {
    console.log(res)
  });
  
```

### PromisePolyFill.resolve and PromisePolyFill.reject

```js
PromisePolyFill.resolve = (val) =>
  new PromisePolyFill(function executor(resolve, _reject) {
    resolve(val);
  });

PromisePolyFill.reject = (reason) =>
  new PromisePolyFill(function executor(resolve, reject) {
    reject(reason);
  });
```


---

### Polyfill for Promise.all()
```js

// by roadside coder

PromisePolyFill.all = (promises) => {
  let fulfilledPromises = [],
    result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) =>
      promise
        .then((val) => {
          fulfilledPromises.push(true);
          result[index] = val;

          if (fulfilledPromises.length === promises.length) {
            return resolve(result);
          }
        })
        .catch((error) => {
          return reject(error);
        })
    );
  }
  return new PromisePolyFill(executor);
};


```


```js
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

const arr = [promise1, promise2, promise3, promise4];

function myAll(promises) {
  const output = [];
  let promisesResolved = 0;
  return new Promise((resolve, reject) => {
    try {
      promises.forEach(async (promise, index) => {
        const response = await promise;
        promisesResolved += 1;
        output.push(response);
        if (promisesResolved === promises.length) {
          resolve(output);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

myAll(arr).then((res) => {
  console.log(res);
});
```



---

### Promise.race Polyfill

```js
export function promiseRace(promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      promise
        .then(resolve) // resolve outer promise, as and when any of the input promise resolves
        .catch(reject); // reject outer promise, as and when any of the input promise rejects
    });
  });
}

```
