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
const arr = [1, 3, 4, 5, 5, 6];

const logger = (item, index) => {
  console.log(item, index);
};

Array.prototype.forEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i);
  }
};

arr.forEach(logger);
```



### Polyfill for Promise.all()
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

### Polyfill for Function.bind()
```js
Function.prototype.myBind = function(...args){
    var callback = this,
        ctx = args.splice(1);
    return function(...a){        
        callback.call(args[0], ...[...ctx, ...a]);
    }
}

const result2 = printName.myBind(myName, "Palia",);
result2("India");
```
```
if (!Function.prototype.bind) {
    Function.prototype.bind = function(context, ...args) {
        // Save the reference to the original function
        var fn = this;

        // Return a new function with the bound context and arguments
        return function(...innerArgs) {
            // Combine the arguments
            const combinedArgs = args.concat(innerArgs);

            // Use 'call' to invoke the function with the combined arguments
            return fn.call(context, ...combinedArgs);
        };
    };
}

```

### Polyfill for curry()
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
