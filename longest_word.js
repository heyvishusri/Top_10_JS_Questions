//write a function that return the longest word in a sentence
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    //loop through each word
    if (word.length > longestWord.length) {
      longestWord = word; //update longest word if current word is longer
    }
  }
  return longestWord;
}
console.log(longestWord("I love programming in JavaScript")); //programming
