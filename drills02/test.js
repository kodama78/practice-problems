var testVals = [{
  question: `countOccurences: given an array of words and a separate word, count how many times a particular word given occurs within that array
    for example: ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
        returns 3
  `,
  testVals: {
    inputs: [
        [['how','much','wood','would','a','wood','chuck','chuck','if','a','wood','chuck','could','chuck','wood'],'wood'], 
        [['who','what','who','when','why','who','what','how'],'who'],
        [['someone','is','in','the','kitchen','with','dina'],'taco']
      
    ],
    outputs:    
    [  4,
       3,
       0
    ]
  },
  functionToTest: 'countOccurences'
}, {
  question: `wordLengths: given an array of words, return an array of numbers representing the length of each word
    For example:  fitWithinVal( ['canary','silly','dog','a','mellow'])
        would return [6,5,3,1,6]
    `,
  testVals: {
    inputs: [
        [['sam','I','am','called','dude','my','car']], 
        [['who','said','this','was','a','wet','bar','on','alligators']],
    ],
    outputs: [
      [3,1,2,6,4,2,3], [3,4,4,3,1,3,3,2,10]
    ]
  },
  functionToTest: 'wordLengths'
}, {
  question: `getMinMaxMean: given an array of numbers, 
  get the minimum, maximum, and mean numbers.  
  Return them as an object.
  Mean is another word for average
  For example: [3,1,9,12,4]
  returns: {min: 1, max: 12, mean: 25.8}`,
  testVals: {
    inputs: [
      [[5,-5,15,25,12,2]],
      [[100,101,54]],
      [[12,12,12]]
    ],
    outputs: [
      {min: -5, max: 25, mean: 9}, {min: 54, max: 101, mean: 85}, {min: 12, max: 12, mean: 12}
    ]
  },
  functionToTest: 'getMinMaxMean'
}, {
  question: `findMode: Given an array of numbers, find the number that occurs the most often
    for example: [5,2,7,18,2,42,5,2]
      returns 2, since it occurs 3 times.  If 2 numbers occur the same amount, return the last one`,
  testVals: {
    inputs: [
      [[2,4,6,3,4,3,2,4,3,5]],
      [[4,6,3,6,1,8,4,3,3,4,5,6,6,7]],
    ],
    outputs: [
      3, 6
    ]
  },
  functionToTest: 'findMode'
}]

unitTest(testVals);
