let number = 705; // replace with your number
let s = "";

while (number > 0) {
    let rem = number % 26;
    if (rem == 0) {
        s += 'Z';
        number = Math.floor(number / 26) - 1;
    } else {
        s += String.fromCharCode((rem - 1) + 'A'.charCodeAt(0));
        number = Math.floor(number / 26);
    }
}

s = s.split('').reverse().join('');

console.log(s);