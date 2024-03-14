

// ! Trick - 1
// Default Function Parameters
// Set default values for function parameters to avoid undefined errors.
function showResult( value = "Pass"){
    // ! Trick - 2
    console.log(`Hello! The Order is too ${value} !!`) 
    // Use template literals for embedding expressions in strings.
}

let price = 100;

// ! Trick - 3
// A shorthand for the if-else statement.
let check = price > 50 ? "Expensive" : "Cheap" ;

showResult(check);