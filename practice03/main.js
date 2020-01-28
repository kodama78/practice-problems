var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
var stringArray = [];
var booleanArray = [];
var numberArray = [];
var output = [stringArray, numberArray, booleanArray];

// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]

function groupArray(array) {
  for (var i = 0; i < array.length; i++){
    var type = typeof array[i];
    addToTypeArray( type, array[i] );
  }
  return output;
}

function addToTypeArray(type, value) {
  switch(type) {
    case 'string':
      stringArray.push(value);
      break;
    case 'boolean':
      booleanArray.push(value);
      break;
    case 'number':
      numberArray.push(value);
      break;
  }
}

console.log(groupArray(myArray));
