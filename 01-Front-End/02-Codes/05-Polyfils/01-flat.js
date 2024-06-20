
// flat polyfil

const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

// 1. flat function
const flat = (array, depth = 1, output = []) => {
    for(let item of array){
        if(Array.isArray(item) && depth > 0){
                flat(item, depth - 1, output);
        }
        else {
            output.push(item);
        }
    }
    console.log(output);
}

flat(arr);

// 2. flat polyfil 2
if (!Array.prototype.flat1) {
  Array.prototype.flat1 = function (depth = 1) {
    const flatten = (arr, depth, output = []) => {
      for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
          flatten(item, depth - 1, output);
        }
        else {
          output.push(item);
        }
      }
      return output;
    }

    return flatten(this, depth);
  }
}

let x = arr.flat1();
console.log(x);



// 3. flat polyfil 3
if (!Array.prototype.flat2) {
  Array.prototype.flat2 = function (depth = 1) {
    // Check if the given depth is a number and non-negative
    if (typeof depth !== "number" || depth < 0) {
      throw new TypeError("Depth must be a non-negative number");
    }

    // Initialize the flattened array
    const flatten = (arr, depth) => {
      return arr.reduce((acc, val) => {
        // If the current element is an array and depth is not zero
        if (Array.isArray(val) && depth > 0) {
          // Recursively flatten the array and decrease depth by 1
          acc.push(...flatten(val, depth - 1));
        } else {
          // Otherwise, push the current element to the flattened array
          acc.push(val);
        }
        return acc;
      }, []);
    };

    return flatten(this, depth);
  };
}

// Example usage
const arr2 = [1, [2, [3, [4, 5]]]];
console.log(arr2.flat2()); // Outputs: [1, 2, [3, [4, 5]]]
console.log(arr2.flat2(1)); // Outputs: [1, 2, [3, [4, 5]]]
console.log(arr2.flat2(2)); // Outputs: [1, 2, 3, [4, 5]]
console.log(arr2.flat2(3)); // Outputs: [1, 2, 3, 4, 5]
