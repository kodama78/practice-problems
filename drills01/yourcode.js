
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
// [
// {
//   "familyName": "McGee",
//     "givenName": "Chuckles",
//       "greeting": "Miss.",
//         "age": 28,
//           "height": 165,
//             "colors": {
//     "eye": "green",
//       "hair": "green"
//   },
//   "home address": {
//     "streetNumber": "12345",
//       "streetName": "Any St",
//         "state": "Mo",
//           "zip": 63102,
//             "city": "Kansas City"
//   }
// }
// ]
//- return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"
function makeLabel(customer){
  let shipLabel = "";
  let lineOne = `${customer[0].greeting} ${customer[0].givenName} `;
  lineOne += `${customer[0].familyName}`;
  let lineTwo = "";
  let lineThree = "";

}
