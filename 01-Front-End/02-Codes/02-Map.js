// 1. Sum of all elements using map
const arr = [1, 2, 3];

let sum = 0;
arr.map(num => {
    sum += num;
});
console.log(sum);

// 2. Double the elements
let d = [];
d = arr.map(num => {
    // num * 2; // gives error because not returning
    return num * 2;
});
console.log(d);

// 3. Convert to uppercase
const strings = ["hello", "world"];
let uppercase = strings.map(str => str.toUpperCase());
console.log(uppercase);

// 4. Extracting names from an array of objects
const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
let names = [];
names = users.map(user => {
    return user.name;
});
console.log(names);

// 5. Calculating squares of an array of numbers
const numbers = [1, 2, 3, 4];
let squares = [];
squares = numbers.map(num => {
    return num * num;
});
console.log(squares);

// 6. Formatting prices (e.g., 50 to $50.00)
const prices = [10, 20, 30];
let formatPrices = prices.map(price => {
    return '$' + price.toFixed(2);
});
console.log(formatPrices);

// More optimized code for formatting prices
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);

// 7. Rendering a list of JSX elements (React example)
const data = ["Item 1", "Item 2", "Item 3"];
let listData = data.map((item, index) => <li key={index}>{item}</li>);

// Using forEach to achieve the same (not preferred)
let listItems = [];
data.forEach((item, index) => {
  listItems.push(<li key={index}>{item}</li>);
});
// listItems now contains the desired elements, but this is not the preferred approach

// 8. Display data like ["Alice is 25 years old.", "Bob is 30 years old."]
const userData = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
let displayData = userData.map(data => {
    return `${data.name} is ${data.age} years old.`;
});
console.log(displayData);

// 9. Increment numbers by 1
const num = [1, 2, 3];
let incrementNum = num.map(no => no + 1);
console.log(incrementNum);

// 10. Applying conditional logic
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num % 2 === 0 ? num * 2 : num);
console.log(doubled); // [1, 4, 3, 8]

// 11. Flattening arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
let flatArr = [];
nestedArrays.map(arr => {
    arr.map(item => {
        flatArr.push(item);
    });
});
console.log(flatArr);

// Using flatMap for flattening arrays
const flattened = nestedArrays.flatMap(arr => arr);
console.log(flattened);

// 12. Adding extra properties to each object in an array
const products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Phone' }];
let modifiedProducts = products.map(product => {
    return { ...product, available: 'true' };
});
console.log(modifiedProducts);

// 13. Creating indexed data structures
const colors = ['red', 'green', 'blue'];
const indexColor = colors.map((color, index) => {
    return { index, color };
});
console.log(indexColor);

// 14. Filtering and transforming simultaneously
const numbers = [1, 2, 3, 4, 5];
const evenSquares = numbers.map(num => num % 2 === 0 ? num ** 2 : null).filter(num => num !== null);
console.log(evenSquares); // [4, 16]
