

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
