
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


// 2. flat polyfil implement

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
