//Write a function to check given number is prime or not
function isPrime(num) {
  if (num <= 1) return false; // numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // or i<=num/2, but sqrt is more efficient
    if (num % i === 0) {
      return false; // found a divisor, not prime
    }
  }
  return true; // no divisors found, it's prime
}
console.log(isPrime(11)); // true
console.log(isPrime(4)); // false
