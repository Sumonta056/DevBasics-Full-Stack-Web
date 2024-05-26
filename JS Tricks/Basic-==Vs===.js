// == checks for equality after performing any necessary type conversions
let doubleEqualTest = "5" == 5; // true, because "5" is converted to the number 5 before comparison
console.log(doubleEqualTest); // Outputs: true

// === checks for equality without performing type conversions
let tripleEqualTest = "5" === 5; // false, because "5" is a string and 5 is a number, and no type conversion is performed
console.log(tripleEqualTest); // Outputs: false