In JavaScript, a prototype is an object from which other objects inherit properties. Each JavaScript object has a prototype linkage to another object called its prototype. Here's a basic explanation with an example:

### Example:

```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
};

// Creating an instance
let person1 = new Person('Alice', 30);

// Using the method from the prototype
console.log(person1.introduce()); // Outputs: Hi, I'm Alice and I am 30 years old.
```

### Explanation:

1. **Constructor Function (`Person`)**:
   - This is a function used to create objects. In JavaScript, functions can be used as constructors with the `new` keyword.

2. **Prototype (`Person.prototype`)**:
   - Every function in JavaScript has a `prototype` property that is used to attach properties and methods. When you create an object using `new Person()`, it inherits properties and methods from `Person.prototype`.

3. **Adding Methods**:
   - Methods added to the `prototype` are shared among all instances of objects created with that constructor function. This is more memory efficient compared to adding methods directly inside the constructor because the method is not duplicated for each instance.

4. **Instance (`person1`)**:
   - Objects created using the constructor function (`new Person()`) inherit properties and methods from `Person.prototype`.

Prototypes are crucial in JavaScript for implementing inheritance and enabling efficient memory usage by sharing methods across instances.


---

## Interview Questions

Sure, here are 10 common interview questions about prototypes in JavaScript along with their answers:

1. **What is a prototype in JavaScript?**
   - A prototype in JavaScript is an object from which other objects inherit properties. It acts as a blueprint for objects and provides shared properties and methods that other objects can access.

2. **How do you create an object using a prototype in JavaScript?**
   - Objects in JavaScript can be created using constructor functions or classes. For example:
     ```javascript
     function Person(name, age) {
         this.name = name;
         this.age = age;
     }
     Person.prototype.introduce = function() {
         return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
     };
     let person1 = new Person('Alice', 30);
     ```

3. **What is the difference between `prototype` and `__proto__` in JavaScript?**
   - `prototype` is a property of constructor functions (or classes) and is used to add methods or properties that are shared among instances. `__proto__` is a property of all JavaScript objects and is used to access the object's prototype.

4. **How do you check if an object has a property defined on its prototype chain?**
   - You can use the `hasOwnProperty` method to check if a property belongs directly to the object or if it is inherited through the prototype chain:
     ```javascript
     let obj = {};
     obj.hasOwnProperty('property'); // Returns true or false
     ```

5. **Explain the concept of prototypal inheritance in JavaScript.**
   - Prototypal inheritance in JavaScript means that objects can inherit properties and methods from other objects. Every JavaScript object has a `__proto__` property that links it to its prototype object, forming a chain until it reaches `null`.

6. **How can you extend the prototype of built-in JavaScript objects like Array or String?**
   - You can add new methods to the prototype of built-in objects to extend their functionality:
     ```javascript
     Array.prototype.customMethod = function() {
         // Custom method implementation
     };
     ```

7. **What happens when you call a method on an object in JavaScript?**
   - JavaScript looks for the method directly on the object. If it doesn't find it, it looks at the object's prototype (`__proto__`), then the prototype's prototype, and so on, until it either finds the method or reaches the end of the prototype chain (`null`).

8. **How do you change the prototype of an existing object?**
   - In JavaScript, you cannot change the prototype of an existing object directly. However, you can change the prototype of all instances created from a constructor function by modifying the constructor function's `prototype`.

9. **Explain the role of `Object.create` in JavaScript.**
   - `Object.create(proto)` creates a new object with the specified prototype (`proto`). It allows you to create objects with specific prototypes without needing constructor functions.

10. **What is the difference between `Object.prototype` and `Function.prototype` in JavaScript?**
    - `Object.prototype` is the prototype for all objects in JavaScript. `Function.prototype` is the prototype for all function objects (since functions are objects in JavaScript). `Function.prototype` itself is an instance of `Object`.

These questions cover fundamental aspects of prototypes in JavaScript and are commonly asked in interviews to assess understanding of object-oriented concepts and inheritance in the language.
