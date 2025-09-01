//Write a function to find the largets number in array

// function largestNumber(arr) {
//   return Math.max(...arr);
// }
// console.log(largestNumber([3, 5, 7, 2, 8])); // Output: 8
function largestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(largestNumber([-3, -5, -7, -2, -8])); // Output: -2
