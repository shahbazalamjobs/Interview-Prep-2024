

// HOC

function greet() {
    console.log("hello everyone, this is callback function");
}

function highOrder(fun) {
    console.log("this is high order function")

    fun();
}

highOrder(greet);


/* ------------------ */

const radiusArray = [1,2,3,4];

function area(radius) {
    return 3.14 * radius * radius;
}

function diameter(radius) {
    return radius  * 2;
}

// high order function -> 1 function which accept multiple callback logical func and args 

function calculate(radiusArr, logicFn) {
    let output = [];

    for(let i=0; i<radiusArr.length; i++){
        output.push(logicFn(radiusArr[i]));
    }
    return output;
}

let diameters = calculate(radiusArray, diameter);
let areas = calculate(radiusArray, area);

console.log(diameters); // [ 2, 4, 6, 8 ]
console.log(areas); // [ 3.14, 12.56, 28.259999999999998, 50.24 ]


/* ------------------ */

// Now functions like Map, filter, reduce are builtin js HOC function 

//  While call, apply, and bind are not higher-order functions by themselves, they can be used within higher-order functions or to create higher-order functions.
