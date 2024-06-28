# What is a Higher Order Function?

A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

There are several different types of higher order functions like `map` and `reduce`. We will discuss these later in this tutorial. But before that, let's first dive deep into what higher order functions are.

## 1. Functions as Arguments

```js
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
    console.log('I am a callback function');
}

// Higher order function
function higherOrderFunction(func) {
    console.log('I am a higher order function');
    func();
}

higherOrderFunction(callbackFunction);
```

## 2. Functions as Return Values

```js
function createMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15
```

So, suppose I want you to write a function that calculates the area and diameter of a circle. As a beginner, the first solution that comes to our mind is to write each separate function to calculate area or diameter.

```js
const radius = [1, 2, 3];

// Function to calculate area of the circle
const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

// Function to calculate diameter of the circle
const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));
```

Now we write the same code using HOFs:

```js
const radius = [1, 2, 3];

// Logic to calculate area
const area = function(radius) {
    return Math.PI * radius * radius;
};

// Logic to calculate diameter
const diameter = function(radius) {
    return 2 * radius;
};

// A reusable function to calculate area, diameter, etc.
const calculate = function(radius, logic) { 
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
```

---

## 3. Array Higher-Order Methods

JavaScript arrays have several built-in higher-order functions, such as `map`, `filter`, and `reduce`.
