
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

function getAllNamesShorterThan(names, numberOfLetters){
  let shorterNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length <= numberOfLetters) {
      shorterNames.push(names[i]);
    }
  }
  return shorterNames;
}

function makeLabel(customers){
  let label = [];
  let lineOne, lineTwo, lineThree;
  for (let i =0; i < customers.length; i++) {
    const data = customers[i][0];
    const home = data['home address'];
    lineOne = `${data.greeting} ${data.givenName} ${data.familyName}\n`;
    lineTwo = `${home.streetNumber} ${home.streetName}\n`;
    lineThree = `${home.city}, ${home.state} ${home.zip}`;
    label.push(lineOne + lineTwo + lineThree);
  }
   console.log(label);
}

const customers = [
  [{ 'familyName': 'Paschal', 'givenName': 'Daniel', 'greeting': 'Mr.', 'age': 43, 'height': 185, 'colors': { 'eye': 'blue', 'hair': 'brown' }, 'home address': { 'streetNumber': '9200', 'streetName': 'Irvine Center Drive', 'state': 'CA', 'zip': 92618, 'city': 'Irvine' } }],
  [{ 'familyName': 'McGee', 'givenName': 'Chuckles', 'greeting': 'Miss.', 'age': 28, 'height': 165, 'colors': { 'eye': 'green', 'hair': 'green' }, 'home address': { 'streetNumber': '12345', 'streetName': 'Any St', 'state': 'Mo', 'zip': 63102, 'city': 'Kansas City' } }],
];

makeLabel(customers);
