
/*
In JavaScript, setTimeout and setInterval are two functions that allow you to execute code after a certain amount of time or at regular intervals, respectively.

*/

// setTimeout -> Purpose: Executes a function once after a specified delay.

setTimeout(function () {
    console.log("SetTimeout: This message is delayed after 2 sec.");
}, 2000)

// clearTimeout

let timeoutID = setTimeout(() => {
    console.log("This will not be displayed");
}, 5000);

clearTimeout(timeoutID);  // Stops the timeout


// setInterval -> Executes a function repeatedly at specified intervals.

setInterval(() => {
    console.log("This message is displayed every 3 seconds");
}, 3000);


// clearInterval
let timeOutid2 = setInterval(function () {
    console.log("Message called after every 2 sec. !!!");
}, 2000);

setTimeout(function () {
    clearInterval(timeOutid2);
}, 6000);


// Use of set Interval
let c = 4
let timeOutID = setInterval(function () {
    console.log("SetInterval: This message is called after every 2 sec.");
    c--;

    if (c === 0) {
        console.log(c);
        clearTimeout(timeOutID);
    }

}, 2000);
