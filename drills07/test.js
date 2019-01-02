


var testVals = [{
  question: `No function: change yourcss.css to make the 
  first div have red text
  `,
  testVals: {
    inputs: [
        [] 
    ],
    outputs:    
    [  
      undefined
    ],
    testFunctions: [
      {
        message: 'the div with a class of makeRed should have red text color',
        test: ()=> {
          var domElements = $("#testArea > *");
          if(domElements.eq(0).attr('class') !== 'makeRed'){
            return 'you cannot remove the class from the element'
          }
          if(domElements.eq(0).css('color') !== 'rgb(255,0,0)'){
            return 'first element should be red but is not'
          }
        }
        
      },  
    ]
  },

  functionToTest: 'testFunction1'
}]


