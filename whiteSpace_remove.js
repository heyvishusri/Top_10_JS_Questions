//write a program to remove whitespace characters from a string
function removeWhitespace(str) {
  return str.replace(/\s+/g, "");
}
//or
function removeWhitespace2(str) {
  return str.split(" ").join("");
}
let str = "   Hello   World   ";
console.log(removeWhitespace(str));

//or using loop
function removeWhitespace3(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}
console.log(removeWhitespace3(str));
