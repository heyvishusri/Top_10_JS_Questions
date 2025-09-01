//write a function to remove duplicate elemnets from an array
// function removeDuplicate(arr) {}

function removeDuplicate(arr) {
  const uniqueElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueElements.indexOf(arr[i]) === -1) {
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])); //[1,2,3,4,5]
