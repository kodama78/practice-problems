


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
          var target = domElements.eq(0)
          if(target.attr('class') !== 'makeRed'){
            return 'First element should only have 1 class of makeRed'
          }
          if(target.css('color') !== 'rgb(255,0,0)'){
            return 'first element should be red but is not'
          }
          if(target.attr('id')!==''){
            return 'first element should not have an ID'
          }
        }
        
      },  
    ]
  },

  functionToTest: 'testFunction1'
}]


