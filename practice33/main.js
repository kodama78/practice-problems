// Build a function, invert_negatives, that takes a number as a parameter,
// and if the number is positive, it makes it negative.If it isn't a number, it returns false

//   - invert_negatives(-5)
//   - Returns: -5
//     - invert_negatives(4000)
//     - Returns: -4000
//       - invert_negatives('puppies')
//       - Returns: false

function invertNegatives (number){
  if(typeof number != 'number'){
    return false;
  } else {
    return number * -1
  }
}

console.log( invertNegatives(-5));
console.log(invertNegatives(4000));
console.log(invertNegatives('puppies'));
