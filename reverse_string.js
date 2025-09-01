// Write a function that returns the reverse of a given string.

// function reverseStr(Str) {
//   let reversedStr = "";
//   for (let i = Str.length - 1; i >= 0; i--) {
//     reversedStr += Str[i];
//   }
//   return reversedStr;
// }
// console.log(reverseStr("Hello RKU"));

function reverseStr(Str) {
  return Str.split("").reverse().join("");
}
console.log(reverseStr("Hello RKU"));
