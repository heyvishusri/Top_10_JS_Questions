//Write a function to check if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
  let sortedStr1 = str1.split("").sort().join(""); // Sort the characters of the strings and join them back together to form sorted strings for comparison
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
