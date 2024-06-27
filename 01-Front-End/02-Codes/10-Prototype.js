
// Prototype

/*

- It is an object which is a property in all the objects.
- Each js prototype is linkage to another 
- if object tries to access a property and doesnot find it then it looks that property inside the prototyp and if not found then it tries to looks prototype of prototype of object .. and so on till this chian ends.


*/

function Data(name, age) {
    this.name = name;
    this.age = age;
}

Data.prototype.printData = function () {
    console.log("Name : " + this.name + " and age : " + this.age);
}

const person1 = new Data("Shahbaz", 25);

person1.printData();    // Name : Shahbaz and age : 25



// Now similary we can do with array, function, object as well

// Array prototype

Array.prototype.firstElement = function() {
    return this[0];
}

let arr = [7,2,6,1,8];

console.log("First Element of arr: " + arr.firstElement());


// Object prototype

Object.prototype.printKeys = function() {
        console.log(Object.keys(this));        
}

let person2 = {
    name: "Anuj",
    age: 28,
}

person2.printKeys()


// Function prototype

Function.prototype.customCall = function(context, ...args) {
    return this.apply(context, args);
}

const person3 = {
    name: "Sohail",
    age: 23
}

function greet(city) {
    console.log("Name is " + this.name + " and age is " + this.age + " and city is " + city);
}

greet.customCall(person3, "Pune");

