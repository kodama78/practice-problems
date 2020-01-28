// ## Fitting words

// Build a function that takes in a string and an array of strings.
// The function should output an array of strings that contain the same letters as the single input string.

// - Write a function that takes two parameters
//   - Parameter 1 - A string
//     - Parameter 2 - An array of strings
//       - The function should output all the words from the input array(parameter 2)
// that have the same letters as the first parameter.IE 'cat' has 'c', 'a', and 't', and all words that have 'c', 'a', and 't' will be included.
// - Example:
// - `var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];`
//   - `fittingWords('cat', myArray);`
//   - Output - `['cat','caterpillar','accurate','cactus']`

var myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];
console.log(myArray);

function fittingWords(word, array){
  for(i = 0; i < array.length; i++){
    console.log('array word', array[i])
    var checkWord = matchWord(word, array[i]);
    console.log('checkword', checkWord);
    if (!checkWord){
      array.splice(i ,1);
    }
  }
  return array;
}

matchWord('cat', myArray);

function matchWord(word, arrayElement){
  for (var wordIndex = 0; wordIndex < word.length; wordIndex++){
    var letter = true;
    while(letter){
      letter = word.slice(wordIndex, wordIndex + 1);
      console.log('match word letters', letter);
      var letterCheck = matchLetter(letter, arrayElement);
    }
  }
  return false;
}

function matchLetter(letter, word){
  for (var wordIndex = 0; wordIndex < word.length; wordIndex++) {

    var match = word.slice(wordIndex, wordIndex + 1);
    if (match === letter){
      return true;
    }
  }
  return false;
}
