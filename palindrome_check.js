//Write a function that checks whether a given string is a palindrome or not.
function isPalindrome(str) {
  let reverseString = str.split("").reverse().join("");
  return str === reverseString;
}
console.log(isPalindrome("racecar")); //true
