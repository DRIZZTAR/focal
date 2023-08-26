//The first piece pulls out the command line arguments we want to work with and initializes an empty array where we want to keep the translated words.

var originalWords = process.argv.slice(2);
var pigLatinWords = [];

//The variable above can be checked for bug by console.log them and checking they're values

// iterates over the original words, translates each one, and pushes the result into pigLatinWords.
for (var i = 0; i < originalWords.length; i++) {
  // console.log(translateToPigLatin(originalWords[i]));  // This can be used to log the elements inside originalWords as we loop through console.log(originalWords[i]);
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

//we're joining the contents in pigLatinWords, which we expect to be strings, and outputs the final result to the console.
console.log(pigLatinWords.join(' '));

//The last piece of code, we have a function that takes a word and applies the pig latin translation algorithm to it.
function translateToPigLatin(word) {
  /*console.log("Word", word);
  console.log("First letter", word[0]);
  console.log("Rest of word", word.slice(1, word.length)); */
  return word.slice(1, word.length) + word[0] + "ay";
}