var testVals = [{
  question: `sumArray: given an array of numbers, add up all the numbers
    for example: [1,5,3,2,6]
        returns 17
  `,
  testVals: {
    inputs: [
        [[4,2,3,6,7,1,8,10,9]], 
        [[24,49,63,6,79,65,60,86,94,36,40,29,42,25,12,4,83,88,4,72]],
      
    ],
    outputs:    
    [  50,
       961
    ]
  },
  functionToTest: 'sumArray'
}, {
  question: `fitWithinVal: given an array and a number, 
    sum the array until you reach the number.  
    keep adding any values that would total below the given value
    return an array of every number you could add
    For example:  fitWithinVal( [1,100,2,4,5,6], 7)
        would return [1,2,4]
    `,
  testVals: {
    inputs: [
        [[4,2,3,6,7,1,8,10,9], 30], 
        [[24,49,63,6,79,65,60,86,94,36,40,29,42,25,12,4,83,88,4,72], 500],
    ],
    outputs: [
      [4, 2, 3, 6, 7, 1], [24, 49, 63, 6, 79, 65, 60, 86, 36, 29]
    ]
  },
  functionToTest: 'fitWithinVal'
}, {
  question: `getAllNamesShorterThan: Given an array of names and a value, 
    return an array of only the names shorter than the given value
    for example: getAllNamesShorterThan(['Clyde','Sue','Jerry','Jo'], 4)
    would return ['Sue','Jo']
    `,
  testVals: {
    inputs: [
      [['Clyde','Sue','Jerry','Jo'], 4],
      [['chuck','sandy','mindy','todd'],2],
      [['chuck','sandy','mindy','todd'],20]
    ],
    outputs: [
      ['Sue','Jo'], [], ['chuck','sandy','mindy','todd']
    ]
  },
  functionToTest: 'getAllNamesShorterThan'
}, {
  question: `given an object with data for a person in it, generate a 
  shipping label in the following form:
    Miss Jane Doe<br>
    123 Any St<br>
    Springfield, Ma 12345
    Please note that the next lines are generated via newlines`,
  testVals: {
    inputs: [
      [{'familyName' : 'Paschal','givenName': 'Daniel','greeting': 'Mr.','age': 43,'height' : 185,'colors': {'eye': 'blue','hair': 'brown'},'home address': {'streetNumber': '9200','streetName': 'Irvine Center Drive','state': 'CA','zip': 92618,'city': 'Irvine'}}],
      [{'familyName' : 'McGee','givenName': 'Chuckles','greeting': 'Miss.','age': 28,'height' : 165,'colors': {'eye': 'green','hair': 'green'},'home address': {'streetNumber': '12345','streetName': 'Any St','state': 'Mo','zip': 63102,'city': 'Kansas City'}}],
    ],
    outputs: [`Mr. Daniel Paschal
9200 Irvine Center Drive
Irvine, CA 92618`,`Miss. Chuckles McGee
12345 Any St
Kansas City, Mo 63102`
    ]
  },
  functionToTest: 'makeLabel'
}]

