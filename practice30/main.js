function random_range (start_num, end_num) {
  var startNumber = start_num;
  var endNumber = end_num;
  var answer;
  var range;
  if (typeof startNumber === 'number' ) {
    range = endNumber - startNumber;
    answer = Math.round(Math.random() * range) + startNumber;
  } else  if (typeof startNumber === 'object' ) {
    range = startNumber.length;
    var index = Math.floor(Math.random() * range );
    console.log('index ' + index);
    answer = startNumber[index];
  } else {
    answer = "incorrect parameter"
  }

return answer
}
var test1 = ['a', 'b', 'c', 'd', 'e'];
for (i=0; i <100; i++) {
  console.log('test answer :', random_range(7,19));
}
