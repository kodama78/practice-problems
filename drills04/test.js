


var testVals = [{
  question: `changeElements: Change any element with a given class (for example "numConvert")
        grab their text, which will be a number in word form (ie one, three, nine)
        The numbers will only be from one to nine
        Change their text to the numeric form (1-9)
        If it doesn't understand the word, it leaves it unchanged
  `,
  testVals: {
    inputs: [
        ['.numConvert'], 
        ['.otherConvert'],
      
    ],
    outputs:    
    [  undefined,
       undefined,
    ],
    testFunctions: [
      {
        message: 'all .numConvert dom elements must have their text replaced with the appropriate number',
        test: ()=> {
          const expected = '12395';
          return Object.values(document.querySelectorAll('.numConvert')).filter( (e, i)=> $(e).text() === expected[i]).length === document.querySelectorAll('.numConvert').length;
        }
      },
      {
        message: 'all .otherConvert elements must have their text replaced with numbers, if the original was a text number',
        test: ()=> {
          debugger;
          const expected = ['4','8','what?'];
          return Object.values(document.querySelectorAll('.otherConvert')).filter( (e, i)=> $(e).text() === expected[i]).length===document.querySelectorAll('.otherConvert').length;
        }
      }
    ]
  },

  functionToTest: 'changeElements'
}, {
  question: `appendTextToElement: given a particular element, replace its text with the original text plus the word 2nd parameter given.
    For example, if you got changeElements('.helloElements','hello'), all elements with a class of helloElements would have their text concatenated with "hello"
    For example, if the text of the element was "yo", it would be changed to "yohello"`,
  testVals: {
    inputs: [
        ['.helloElements', 'hello'], 
        ['.moocow', 'moooo'],
    ],
    outputs: [
      undefined, undefined
    ],
    testFunctions: [
      {
        message: 'all .helloElement elements must have "hello" added to their text',
        test: ()=> {
          const expected = ['holahello', 'nihaohello'];
          return Object.values(document.querySelectorAll('.helloElements')).filter( (e, i)=> $(e).text() === expected[i]).length===document.querySelectorAll('.helloElements').length;
        }
      },
      {
        message: 'All .moocow elements must have "moooo" appended to their text',
        test: ()=> {
          const expected = ['chocolatemoooo', 'lactosemoooo'];
          return Object.values(document.querySelectorAll('.moocow')).filter( (e, i)=> $(e).text() === expected[i]).length===document.querySelectorAll('.moocow').length;
        }
      }
    ]
  },
  functionToTest: 'appendTextToElement'
}, {
  question: `addClass: Make a function that takes in 2 strings.  The first selector it looks for, the 2nd it adds as a class
  For example, if you had addClass(".haha","hehe"), then every element
  with a class of haha would now also have a class of hehe.
  Additionally, return the number of elements so changed`,
  testVals: {
    inputs: [
      ['.haha','hehe'],
      ['.noEle','nope'],
      ['#oneElement','invert']
    ],
    outputs: [
      3,0,1
    ],
    testFunctions: [
      {
        message: 'all .haha elements must also have a class of .hehe',
        test: ()=> {
          return $('.haha.hehe').length === 3
        }
      },
      {
        message: 'All elements with a class of .noEle should have a class of "nope".  There were no such elements so there should be none',
        test: ()=> {
          return $(".noEle.nope").length === 0  
        }
      },
      {
        message: 'The element with an id of oneElement should also have a class of invert',
        test: ()=> {
          return $("#oneElement.invert").length === 1 
        }
      }
    ]
  },
  functionToTest: 'addClass'
}, {
  question: `removeElements: given a particular selector, remove any element that matches that selector`,
  testVals: {
    inputs: [
      ['.killme'],
    ],
    outputs: [
      undefined
    ],
    testFunctions: [
      {
        message: 'remove all elements with a class of killme',
        test: ()=> {
          return $('.killme').length === 0
        }
      }
    ]
  },
  functionToTest: 'removeElements'
}]

function lCon(word){
  return ({'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9})[word]
}
