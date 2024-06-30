
// Synchronous Code

// 1. 
console.log("1. Sync");
console.log("first");
console.log("second");
console.log("third");

// 2. 
console.log("\n2. Sync");
function print() {
  console.log("second")
}

console.log("first");
print();
console.log("third");


// other sync code: math, string operation, loops, conditional, obj, arr manipulation, syn i/o operation


// Asynchronous code

// 1. callbacks
console.log("\n1. Callback");

function fetchData(callback) {
  setTimeout(() => {
    console.log("Fetch succesfull");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing Data !");
}

fetchData(processData);


// Callback Hell
setTimeout(() => {
  console.log("First: after 1 sec");
  setTimeout(() => {
    console.log("Second: after 2 sec");
    setTimeout(() => {
      console.log("Third: after 3 sec");
      setTimeout(() => {
        console.log("Fourth: after 4 sec");
        setTimeout(() => {
          console.log("Fifth: after 5 sec");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


// Promises
console.log("\n2. Promise ");
let promise1 = new Promise((resolve, reject) => {
  let condition = true;

  setTimeout(() => {
    if (condition) {
      resolve("\nPromised resolved successfully");
    }
    else {
      reject("Promise failed");
    }
  }, 2000);
})

promise1
  .then((res) => {  // then method
    console.log(res);
  })
  .catch((err) => { // catch method
    console.error(err);
  });


// Async Await

const fetchData2 = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data resolved succesfully');
    }, 1000);
  });

  let result = await promise;
  console.log(result);
}

fetchData2();


// Fetch api

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error('Error: ', err));


// Fetch using Async Await
const fetchData3 = async function() {
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
}

// fetchData3(); // fetch output


// Event listeners: 
// They are asynchronous because ->  they respond to events like user interactions without blocking the main thread.
document.addEventListener('click', () => {
  console.log('Button clicked');
})
