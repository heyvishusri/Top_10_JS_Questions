//Write a function that return the number of vowels in a given string.
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello, world")); // 2
console.log(countVowels("JavaScript")); // 3
