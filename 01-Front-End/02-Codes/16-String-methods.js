
// String

// A string is a sequence of characters intended to represent text. Strings can contain any kind of character, like letters, numbers, or special characters.
// They are a very useful data type and you will be probably working with them frequently. So it's important to know how to manipulate them efficiently.

// The basics of strings in JavaScript
// Here's a simple definition of a string:
// In JavaScript, a string is a data type representing a sequence of characters that may consist of letters, numbers, symbols, words, or sentences.
// Strings are used to represent text. So, basically, anything that is a Unicode character.

// How to create strings in JavaScript
// In JavaScript, you can create strings by wrapping the text inside single quotes ('), double quotes ("), or backticks (`).
let string1 = 'I am a very cool string! 😎';
let string2 = "I am a very cool string! 😎";
let string3 = `I am a very cool string! 😎`;

// Strings created in this way, as in the example above, are treated equally. You can easily compare them to prove it:
console.log(string1 === string2); // true
console.log(string1 === string3); // true
console.log(string2 === string3); // true

// Basic String Manipulation in JavaScript

// String indexing
// You can access each character inside a string through its numeric index – starting from zero – using bracket notation:
let str = 'larch';
console.log(str[0]); // 'l'
console.log(str.charAt(0)); // 'l'

// The length property
// You get the number of characters contained in a string using the length property:
let sentence = 'Always look on the bright side of life';
console.log(sentence.length); // 38

// String concatenation
// You can concatenate (or join) two or more strings using the concatenation operator, +.
let a = 'When candles are out,';
let b = 'all cats are grey.';
let c = a + ' ' + b;
console.log(c); // 'When candles are out, all cats are grey.'

// Template literals
// Template literals (strings created with backticks, `) have special features, like string interpolation:
const dog1 = 'Bach';
const dog2 = 'Bingo';
console.log(`My two dogs are called ${dog1} and ${dog2}.`);
// My two dogs are called Bach and Bingo.

// Common String Methods in JavaScript

// The concat() method
// Concatenates one or more strings passed as arguments to the string on which the method is called, returning the concatenated string.
let d = 'When candles are out,';
let e = 'all cats are grey.';
let f = d.concat(' ', e);
console.log(f); // 'When candles are out, all cats are grey.'

// The toLowerCase() & toUpperCase() methods
// Convert a string to lowercase and uppercase letters, respectively.
let sentence = 'Always look on the bright side of life';
console.log(sentence.toLowerCase()); // 'always look on the bright side of life'
console.log(sentence.toUpperCase()); // 'ALWAYS LOOK ON THE BRIGHT SIDE OF LIFE'

// The includes() method
// Checks if a specified string is present inside another string.
console.log(sentence.includes('look up')); // false
console.log(sentence.includes('look on')); // true

// The indexOf() methods
// Searches for a substring and returns the first occurrence of the substring inside the calling string.
console.log(sentence.indexOf('l')); // 1
console.log(sentence.indexOf('l', 2)); // 7

// The startsWith() & endsWith() methods
// Checks if a string begins or ends with a specific sequence of characters.
let dish = 'Lemon curry';
console.log(dish.startsWith('Lem')); // true
console.log(dish.endsWith('ry')); // true

// The slice() & substring() methods
// Pull a portion of a string, returning it as a new string.
console.log(sentence.slice(7)); // 'look on the bright side of life'
console.log(sentence.substring(7)); // 'look on the bright side of life'

// The split() method
// Breaks a string into an array of substrings based on a specified separator.
console.log(sentence.split(' ')); // ['Always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']

// The match() method
// Searches for a pattern inside a string and returns an array of matching results.
const tongueTwister = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const regex1 = /(w|c)o*(ul)?d/g;
console.log(tongueTwister.match(regex1)); // ['wood', 'would', 'wood', 'wood', 'could', 'wood']

// The test() method
// Searches for a specific pattern inside a string and returns a boolean.
const regex2 = /wool/g;
console.log(regex1.test(tongueTwister)); // true
console.log(regex2.test(tongueTwister)); // false
