

// IIFE

// Syntax

(function(){
    // more codes 
})();   // ; to be used


// 1. Anonymous iife function
(function() {
    console.log("hello world");
})();

// 2. Named iife func
(function greet(){
    console.log("Hello everyone");
})();

// 3. function expression

var x = (function(y){
    return y * 2;
})(3);

console.log(x);

// 4. practical use

var counter = (function(){
    return {
        count: 0,

        increment: function(){
            this.count++;
        },

        decrement: function(){
            this.count--;
        },

        printCount: function(){
            console.log(this.count);
        }        
    }
})();

counter.printCount();   // 0
counter.increment();
counter.printCount();   // 1
counter.increment();    
counter.increment();
counter.printCount();   // 3
counter.decrement();    
counter.printCount();   // 2

