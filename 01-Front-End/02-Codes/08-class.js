

// Creating class  

class Rectangle {
  
  // constructor
  constructor(length, width) {  
    this.length = length;
    this.width = width;
  }

  // method
  getArea() {
    console.log(this.length * this.width);
  }
  
}

// creating instance using contructor and arguments
const rectangle = new Rectangle(11, 20);

rectangle.getArea();


/* ----------------------- */


// Class Inheritance 

class Square extends Rectangle {
  
  constructor(sideLength) {
    super(sideLength, sideLength);  // calls the parent class constructor
  }
}

const square = new Square(10);
square.getArea(); // inherited the getArea property from parent


/* -------------------------- */

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // static keyword to use method and variable directly without creating object instance
  static getArea(radius) {
    console.log(radius * radius * 3.14);
  }
}

Circle.getArea(5);


/* -------------------------- */


// Getter and Setters

class Power {
  constructor(number) {
    this.number = number;
  }

  getSquare(){
    return this.number * this.number;
  }

  setNo(num) {
    this.number = num;
  }
}

const power = new Power(5);
let x = power.getSquare();
console.log(x);

power.setNo(4);
x = power.getSquare();
console.log(x);



/* -------------------------- */


class Person {
  #name; // Private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}
