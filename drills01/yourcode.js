
function sumArray(list){
  let sum = 0;
	for (let i = 0; i <= list.length; i++) {
    sum += list[i] || 0;
    console.log(sum)
  }
  return sum;
}

function fitWithinVal(list, value){
  let sum = 0;
  for (let i = 0; i <= list.length; i++) {
    sum += list[i] || 0;
    if (sum >= value) {
      sum -= list[i];
      list.splice(i);
    }
    console.log(sum)
  }
  return list;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
