
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

  return result;
}

myCall1(person1, printAge, 30);


// 2. polyfil for call

if (!Function.prototype.call2) {
  Function.prototype.call2 = function (context, ...args) {
    context = context || globalThis;

    // Create new property to avoid collision with existing property
    const tempFn = "tempFn";
    context[tempFn] = fn;

    const result = context[tempFn](...args);

    // delete temporary property from the context object
    delete context[tempFn];

    return result;

  }
}

printAge.call(person1, 28);
