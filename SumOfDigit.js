
var sumOfDigit = (digit) => {
    var temp = digit;
    var sum = 0;
    var reminder = 0;
    
    while(temp > 0){
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
}

const digit = 123;
let ans = sumOfDigit(digit);
console.log(ans);