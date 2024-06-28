

// setTimeout

setTimeout(function () {
    console.log("SetTimeout: This message is delayed after 2 sec.");
}, 2000)


// setInterval

let timeoutID = setTimeout(() => {
    console.log("This will not be displayed");
}, 5000);

clearTimeout(timeoutID);  // Stops the timeout


// clearInterval
let timeOutid2 = setInterval(function() {
    console.log("Message called after every 2 sec. !!!");
},2000);

setTimeout(function() {
    clearInterval(timeOutid2);
},6000);


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



