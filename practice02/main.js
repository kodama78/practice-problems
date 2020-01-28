var myArray = ['hello', 45, 'Bob', 'what', '23'];

arrayReverse(myArray);

var reverse = [];

function arrayReverse(){
  for (index = 0; index < myArray.length; index ++){
    reverse.push(myArray.slice(index, index + 1))
  }
}

console.log(reverse);
