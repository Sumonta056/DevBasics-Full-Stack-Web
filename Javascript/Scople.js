// Global scope
var globalVar = "I'm global!";
console.log(globalVar); // Accessible from anywhere

function exampleFunction() {
  // Function scope
  var localVar = "I'm local!";
  console.log(localVar); // Accessible within the function
  
  if (true) {
    // Block scope
    let blockScopedVar = "I'm block scoped!";
    console.log(blockScopedVar); // Accessible within the if block
    console.log(localVar); // Accessible within the if block cause function scope
  }
  console.log(blockScopedVar); // Error: blockScopedVar is not defined
  
}

exampleFunction(); // Call the function to see the output
console.log(globalVar); // Still accessible outside the function
console.log(localVar); // Error: localVar is not defined
console.log(blockScopedVar); // Error: blockScopedVar is not defined