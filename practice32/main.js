function find_middle_letters (string) {
  var stringIndex = string.length;
  var oddCheck = stringIndex % 2;
  console.log('mod ', oddCheck);
  var middleLetters;
  if ( oddCheck === 1) {
    stringIndex = Math.floor( stringIndex / 2 );
    console.log('stringIndex ', stringIndex);
    middleLetters = string.slice(stringIndex, stringIndex +1);
  } else {
    stringIndex /= 2;
    middleLetters = string.slice(stringIndex -1 , stringIndex + 1);
  }
  return middleLetters;
}
console.log('test1 ', find_middle_letters('seven'));
console.log('test2 ', find_middle_letters('dish'));
