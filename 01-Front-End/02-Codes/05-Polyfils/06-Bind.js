
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
