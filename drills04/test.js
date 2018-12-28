var testVals = [{
  question: `getPath: given a path string, return an array with the different parts of the path
    for example: 'folder1/folder2/folder3'
        returns ['folder1','folder2','folder3']
  `,
  testVals: {
    inputs: [
        ['var/www/html'], 
        ['stuff/thing/stuff/howdy'],
      
    ],
    outputs:    
    [  ['var','www','html'],
       ['stuff','thing','stuff','howdy'],
    ]
  },
  functionToTest: 'getPath'
}, {
  question: `getPathParts: Given a full URL string, break it up into parts in an object
    For example:  'http://localhost:8000/happy/go/lucky/file.html'
        would return {
          protocol: 'http',
          host: 'localhost',
          port: 8000,
          path: '/happy/go/lucky',
          file: 'file.html'
        }
    `,
  testVals: {
    inputs: [
        ['http://learningfuze.com:80/part-time/details/index.html'], 
        ['https://google.com:443/account/content.asp'],
    ],
    outputs: [
      {
        protocol: 'http',
        host: 'learningfuze.com',
        port: 80,
        path: 'part-time/details',
        file: 'index.html'
      }, {
        protocol: 'https',
        host: 'google.com',
        port: 443,
        path: 'account',
        file: 'content.asp'
      }
    ]
  },
  functionToTest: 'getPathParts'
}, {
  question: `getCapitalCount: given an array of words, 
  return a count of how many start with capital letters, 
  For example: ['it','will','not','Be','long','Till','we','Are']
  returns: 3`,
  testVals: {
    inputs: [
      [['oh','what','A','glorious','Day']],
      [['YOU','KNOW','it']],
      [['not','a','sausage']]
    ],
    outputs: [
      2,2,0
    ]
  },
  functionToTest: 'getCapitalCount'
}, {
  question: `correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations
    for example: [
        { num1: 3, num2: 3, op: '/', result: 3},
        { num1: 12, num2: 4, op: '-', result: 8},
        { num1: 2, num2: 3, op: '+', result: 5},
        { num1: -5, num2: -2, op: '*', result: 10}
      ]
      returns [
        { num1: 12, num2: 4, op: '-', result: 8},
        { num1: 2, num2: 3, op: '+', result: 5}
      ]`,
  testVals: {
    inputs: [
      [[
        { num1: 3, num2: 3, op: '/', result: 3},
        { num1: 12, num2: 4, op: '-', result: 8},
        { num1: 2, num2: 3, op: '+', result: 5},
        { num1: -5, num2: -2, op: '*', result: -10}
      ]],
      [[
        { num1: 2, num2: 1, op: '+', result: 3},
        { num1: -3, num2: -1, op: '+', result: -4},
        { num1: 20, num2: 2, op: '/', result: 2}
      ]],
    ],
    outputs: [
      [
        { num1: 12, num2: 4, op: '-', result: 8},
        { num1: 2, num2: 3, op: '+', result: 5}
      ], 
      [
        { num1: 2, num2: 1, op: '+', result: 3},
        { num1: -3, num2: -1, op: '+', result: -4}
      ]
    ]
  },
  functionToTest: 'correctCalcChecker'
}]


