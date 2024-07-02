
// Closures

// definition: 
// 1. A function along with its reference to its outer environment forms a closure
// 2. or A function bundled together with its lexical scoping is called as closure
// This means the function retains access to variables from its lexical scope even 
// when the function is executed outside that scope.

// 3.  A closure is a function that retains access to its lexical scope 
// (the scope in which it was defined), even when the function is executed outside that scope.

// 4. Lexical Scoping: This means that functions in JavaScript form closures, which "remember" 
// the environment in which they were created. This includes variables, functions, and even the context (this).


// e.g.

// 1. 

function outer() {
    var data = 2;
    function inner() {
        console.group(data);
    }
    return inner;
}

// outer()();  // 2
// even if the variable data is declared after inner func, still func form closure with data reference
// and even if the variable declared with let still will work same


// 2. 

function outest() {
    function outer() {
        function inner() {
            console.group(data);
        }
        var data = 2;
        return inner;
    }

    return outer;
}

// outest()()();   // 2

// 3. 

function outest2() {
    var b = "b";
    function outer(c) {
        function inner() {
            console.group(a, b, c);
        }
        var a = 'a';
        return inner;
    }

    return outer;
}

// outest2()('c')();   // a b c

// or let close = outest()('d');
// close();   // a b d

// 4. 

function outest3() {
    var b = "b";
    function outer(c) {
        function inner() {
            console.group(a, b, c);
        }
        var a = 'a';
        return inner;
    }

    return outer;
}

let a = 100;

// outest3()('e')();   // a b e , no change becaz inner a and outer a are both different they both have different reference


// 5.  

function outer2() {

    function inner() {

    }
}


// Advantages
// 1. Functions can access variables from their lexical scope even after the outer function has finished executing.
// 2. Currying: Transforming a function with multiple arguments into a series of functions each taking a single argument.
// 3. Memoization and once function: caches the results of expensive function calls.
// 4. Data hiding and encapsulation: enable private variables and encapsulation, protecting data from the global scope and providing modularity.

// Disadvantages 
// 1. Consumes lots of memory, can lead to memory leaks if not managed properly, as they retain 
// refrences to outer function variables even after the outer function has executed.
// 2. Perforamanve overhead due to increased memory consumption and slower garbage collection
// 3. Debugging dfficult because context in which variables created and used can beocme complex.


// Encapsulation 

function counter() {
    var count = 0;

    function incrementCounter() {
        console.log(++count);
    }

    return incrementCounter;
}

// let counter1 = counter();
// counter1();
// counter1();

// let counter2 = counter();
// counter2();
// counter2();


function Counter() {
    var count = 0;
    this.incrementCounter = function(){
        console.log(++count);
    }
    this.decrementCounter = function(){
        console.log(--count);
    }
}

let counter3 = new Counter();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.decrementCounter();


// Garbage Collector?

// 1. Garbage Collector is a program in browser or in JS engine, which free up unutilised memory.
// 2. In languages like c, c++, it is upto developers how we allocate and deallocate memory but in high level programming language like JS, most work is done by JS engine.
// 3. So, whenever there are some unused variables, Garbage collector takes those out of memory
