
### When to Use `forEach`

The `forEach` method is used to execute a provided function once for each array element. It's typically used when you need to perform a side effect (such as logging or modifying the DOM) for each element in an array. `forEach` is ideal for:

1. **Logging Items**: When you need to log or print array elements.
2. **DOM Manipulation**: When you need to create or modify DOM elements based on array data.
3. **Performing Side Effects**: When you need to perform operations that have side effects, like making HTTP requests or updating external state.

### How to Use `forEach`

Here's the syntax for `forEach`:

```javascript
array.forEach((element, index, array) => {
    // Your code here
});
```

- `element`: The current element being processed.
- `index`: The index of the current element.
- `array`: The array `forEach` was called upon.

### Where to Use `forEach`

- Use `forEach` when you need to iterate over all elements of an array and perform an action with each element.
- It’s not suitable for cases where you need to return a value or transform the array (for those cases, consider `map`, `filter`, or `reduce`).

### Best Practices

1. **Avoid Mutating the Original Array**: It's generally good practice to avoid mutating the original array within the `forEach` loop.
2. **Use Arrow Functions**: Arrow functions provide a concise syntax and avoid issues with `this` binding.
3. **Avoid Breaking the Loop**: Unlike `for` loops, you cannot use `break` or `continue` to control the flow in `forEach`. If you need such control, use a `for` loop or `for...of`.
4. **Keep it Simple**: If the logic inside `forEach` becomes complex, consider refactoring into a separate function.
5. **Consider Performance**: For performance-critical code, consider using `for` loops as they may be faster in some cases due to less overhead.

### Examples

**Example 1: Logging Each Name**
```javascript
let names = ['Raju', 'Shyam', 'Shah', 'Asif'];

names.forEach((name, index) => {
    console.log(`Name at index ${index} is ${name}`);
});
```

**Example 2: Modifying DOM Elements**
```javascript
let fruits = ['Apple', 'Banana', 'Mango'];

fruits.forEach((fruit) => {
    let li = document.createElement('li');
    li.textContent = fruit;
    document.getElementById('fruit-list').appendChild(li);
});
```

**Example 3: Performing Side Effects**
```javascript
let users = ['Alice', 'Bob', 'Charlie'];

users.forEach((user) => {
    fetch(`/api/send-email?user=${user}`)
        .then(response => response.json())
        .then(data => console.log(`Email sent to ${user}: ${data.status}`));
});
```

### Summary

- **When**: Use `forEach` for side effects, such as logging or DOM updates.
- **How**: Pass a callback function with up to three parameters (element, index, array).
- **Where**: Use it for iterating over arrays without the need for returning transformed data or breaking the loop.
- **Best Practices**: Avoid mutating the original array, use arrow functions, avoid complex logic, and consider performance implications.
