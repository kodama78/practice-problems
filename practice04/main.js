var myArray = ['mouse', 'cat', 'dog', 'human'];


// - `sort(myArray);`
//   - Output - `['cat', 'dog', 'human', 'mouse']`
//   - Try doing this using a ** Bubble Sort **,

function sort(array){
  var output=[];

  for (var i = 0; i < array.length; i++) {
    var wordA = array[i].charAt(0);
    var wordB = array[i + 1].charAt(0);
    console.log(i);
    var replaceA = array[i];
    var replaceB = array[i + 1];

    if (wordA > wordB) {
      


    } else {
      output.push(replaceA);
    }
    console.log(output);
  }
}
sort(myArray);
