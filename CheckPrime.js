// function checkPrime(n){
//     for(let i = 1 ; i*i <= n ; i++){
//         if(n%i != 0) return false;
//     }
//     return true;
// }

var checkPrime = (n) => {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

console.log(checkPrime(7));
console.log(checkPrime(20));


