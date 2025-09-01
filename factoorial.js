//Write a function to find factorial of a number
function find_Factorial(number) {
  if (number === 0) return 1;
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}
console.log(find_Factorial(5));
