### JavaScript Learning

##### Scope of Variables

```javascript
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
```

##### Reverse a Number

```javascript
var reverseNumber = (num) => {
  var temp = num;
  var reverse = 0;
  var reminder = 0;

  while (temp > 0) {
    reminder = temp % 10;
    reverse = reverse * 10 + reminder;
    temp = Math.floor(temp / 10);
  }
  return reverse;
};
```

##### Sum of Digit of a Number

```javascript
var sumOfDigit = (digit) => {
  var temp = digit;
  var sum = 0;
  var reminder = 0;

  while (temp > 0) {
    reminder = temp % 10;
    sum = sum + reminder;
    temp = Math.floor(temp / 10);
    /*
         In JavaScript, division of integers doesn't automatically truncate
         the decimal part, so you end up with a non-integer value in the next
         iteration. This causes the loop to run indefinitely.
        */
  }
  return sum;
};

const digit = 123;
let ans = sumOfDigit(digit);
console.log(ans);
```

##### Binary Searching a Number

```javascript
var binarySearch = (arr, n, target) => {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

var arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
var n = arr.length;
var target = 23;

var index = binarySearch(arr, n, target);

if (index == -1) console.log("Not Found");
else console.log("Found at Index = " + index);
```
