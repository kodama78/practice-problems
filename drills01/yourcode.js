
function sumArray(list){
  let sum = 0;
	for (let i = 0; i <= list.length; i++) {
    sum += list[i] || 0;
  }
  return sum;
}

function fitWithinVal(list, value){
  let sum = 0;
  let fitList = [];
  for (let i = 0; i < list.length; i++) {
    console.log(`list number: ${list[i]}`);
    sum += list[i];
    if (sum >= value) {
      sum -= list[i];
      console.log(`sum: ${sum} skipped: ${list[i]} list: ${list}`);
    } else {
      fitList.push(list[i]);
      console.log(`sum: ${sum}, list${list}`);
    }
  }
  console.log('done');
  return fitList;
}

function getAllNamesShorterThan(){
  //test update github
}

function makeLabel(){

}
