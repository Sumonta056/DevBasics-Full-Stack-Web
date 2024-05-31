// ! Trick - 1
// Clone arrays or objects without referencing the original.
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(clonedArray);

// ! Trick - 2
// Use logical operators for conditional execution.
let isValid = true;
isValid && console.log("Valid!");

// ! Trick - 3
// Use ?? to provide a default value for null or undefined.
let username = null;
console.log(username ?? "Guest"); // "Guest"

// ! Trick - 4
// Using map, filter for arrays Manipulation

// Basic numbers Array
let numbers = [1, 2, 3, 4];

// Map
let doubled = numbers.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// Filter
const evens = numbers.filter((x) => x % 2 === 0);
console.log(evens); // [2, 4]

