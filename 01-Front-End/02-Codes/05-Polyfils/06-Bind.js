
// Bind

// usage

const person = {
  name: "Rahul",
  age: 25,
  company: "Google",
  getDetails(company) {
    console.log(`This person name is ${this.name} his age is ${this.age} and he is working in ${company}.`);
  }
}

const contextPerson = {
  name: "Anuj",
  age: 20,
}

const person1 = person.getDetails.bind(contextPerson);
person1("Twitter");


// 1. bind Function Implementation

function bind1(context, fn, ...args) {

  return function (...innerargs) {
    let combinedArgs = args.concat(innerargs);

    return fn.call(context, ...combinedArgs);
  }
}

let person2 = bind1(contextPerson, person.getDetails);
person2("Amazon");


// 2. bind polyfil

if (!Function.prototype.bind2) {
  Function.prototype.bind2 = function(context, ...args) {
    let callback = this;

    return function(...innerArgs) {
      let combinedArgs = args.concat(innerArgs);

      return callback.call(context, combinedArgs);
    }
  }
}

let person3 = person.getDetails.bind2(contextPerson, company="Microsoft");
person3();
