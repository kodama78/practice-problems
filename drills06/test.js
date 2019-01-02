

var testVals = [{
  question: `removeClassFromElement: create a function that takes in 
  an element, and the class to remove from that element.
  It should use the removeClass method, not toggle
  `,
  testVals: {
    inputs: [
        [
          '.wasRed','wasRed'
        ], 
        [
          '#redNotBlue','wasBlue'
        ],
        [
          '.wasGreen', 'wasGreen'
        ]
      
    ],
    outputs:    
    [  
      undefined, undefined
    ],
    testFunctions: [
      {
        message: 'Should have removed class "wasRed" from all elements with a class of .wasRed.  If it is wrong, did you use toggle instead of hide?',
        test: ()=> {
          let correctCheck = 0;
          if( $('.wasRed').length === 0 ){ 
            correctCheck++ 
          } else {
            return 'there was an element with class wasRed, there should be none'
          }
          removeClassFromElement('.hasRed','hasRed')
          if( $('.wasRed').length === 0 ){ 
            correctCheck++ 
          } else {
            return 'tried to remove wasRed again.  It should not be present, but now it is!  Did you use toggleClass?'
          }
            
          return correctCheck === 2;
        }
        
      }, 
      {
        message: 'should have removed the class notBlue from the element with an ID of redNotBlue and no where else',
        test: ()=> {
          return (!($('#redNotBlue').hasClass('wasBlue')) && $('.wasBlue').length === 1 ) 
        }
      }, 
      {
        message: 'Should have removed all classes of "wasGreen" from elements with a class of .wasGreen.  ',
        test: ()=> {
          return $('.wasGreen').length === 0 
        }
      }
      
    ]
  },

  functionToTest: 'removeClassFromElement'
},
{
  question: `toggleClassOnElement: create a function that takes in an 
  element and a class.  It toggles the class on the target element
  `,
  testVals: {
    inputs: [
        [ '.needBack', 'willBeGreenText' ], 
        [ '#redNotBlue', 'wasRed'],
        [ '.limeBorder', 'limeBorder']
      
    ],
    outputs:    
    [  undefined,
       undefined,
       undefined
    ],
    testFunctions: [
      {
        message: 'All elements with a class needBack should now also have a class of willBeGreenText',
        test: ()=> {
            return $(".needBack.willBeGreenText").length === 1
        }
      },
      {
        message: 'All elements with an ID redNotBlue should now also have a class of wasRed',
        test: ()=> {
            return $("#redNotBlue.wasRed").length === 1
        }
      },
      {
        message: 'all elements that had a class of limeBorder should no longer have it',
        test: ()=> {
            return $('.limeBorder').length === 0;
        }
      }
      
    ]
  },

  functionToTest: 'toggleClassOnElement'
},
{
  question: `hideElements: create a function that takes in two parameters
  The target, and the removal type.
  hide: hides the element but doesn't remove it
  removeChildren: removes all children elements from the target, but leaves the element there
  removeSelf: erases the element itself
  `,
  testVals: {
    inputs: [
        ['#hideMe','hide'], 
        ['#removeChildren','removeChildren'],
        ['#removeElement','removeSelf'],
      
    ],
    outputs:    
    [  undefined,
       undefined,
       undefined,
    ],
    testFunctions: [
      {
        message: 'the element with an ID of hideMe should be hidden now',
        test: ()=> {
          return $('#hideMe').css('display') === 'none'; 
        }
      },
      {
        message: 'the element with an ID of removeChildren should be empty but #removeChildren itself should still exist',
        test: ()=> {
          return $('#removeChildren').length === 1 && $('#removeChildren').children().length === 0; 
        }
      },
      {
        message: 'the element with an ID of removeElement should be no longer present',
        test: ()=> {
          return $('#removeElement').length === 0; 
        }
      }
      
    ]
  },

  functionToTest: 'hideElements'
},
{
  question: `addAttributeToElement: given an element, an attribute, and a value
  change the targetted element to the appropriate key/value
  for example: addAttributeToElement('#test','hi','bye')
  would make the #test element have an attribute 'hi' with a value of 'bye', like the following:
  <div id="#test" "hi"="bye">
  `,
  testVals: {
    inputs: [
        [
          '.addID', 'id', 'blueID'
        ], 
        [
          '#targetImg', 'src','https://myperbole.files.wordpress.com/2015/04/good-job.png?w=665' 
        ],
      
    ],
    outputs:    
    [  undefined,
       undefined,
    ],
    testFunctions: [
      {
        message: 'The element with a class of .addID should also have an ID of blueID from jquery adding an attribute',
        test: ()=> {
          return $('#blueID').length === 1
        }
      },
      {
        message: 'The image targetImage should have had its src changed',
        test: ()=> {
          return $('#targetImg').attr('src') === 'https://myperbole.files.wordpress.com/2015/04/good-job.png?w=665'
        }
      }
      
    ]
  },

  functionToTest: 'addAttributeToElement'
},
{
  question: `putPosInElement: given an element, grab that element's 
  position and store it inside the text of that element in the following format:
  x: 30px<br>y: 50px
  Note the break element between the two.
  It should also return an object with the values:
  {x: 30, y: 50}
  note that there is no px in this case
  `,
  testVals: {
    inputs: [
        ['#getPos']
    ],
    outputs:    
    [  {x: 220, y: 220},
    ],
    testFunctions: [
      {
        message: 'the element #getPos should have text describing its position',
        test: ()=> {
          console.log($("#getPos").html());
          return $("#getPos").html() === 'x: 220px<br>y: 220px'
          
        }
        
      },
      
    ]
  },

  functionToTest: 'putPosInElement'
}]


