


var testVals = [{
  question: `No function: change yourcss.css to make the 
  elements have the changes indicated by their text
  `,
  testVals: {
    inputs: [
        [], [], []
    ],
    outputs:    
    [  
      undefined, undefined, undefined
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
          if(target.css('color') !== 'rgb(255, 0, 0)'){
            return 'first element should be red but is not'
          }
          if(target.attr('id')!==undefined){
            return 'first element should not have an ID'
          }
          return true;
        }  
      },  
      {
        message: 'the div with a class of makeRed should have red text color',
        test: ()=> {
          var domElements = $("#testArea > *");
          var target = domElements.eq(1)
          if(target.attr('class') !== 'makeRed noMakeGreen'){
            return 'second element should only have 2 classes of makeRed noMakeGreen'
          }
          if(target.css('color') !== 'rgb(0, 128, 0)'){
            return 'second element should be green (not lime green) but is not'
          }
          if(target.attr('id')!==undefined){
            return 'second element should not have an ID'
          }
          return true;
        }  
      },  
      {
        message: 'the third div should have a color of yellow',
        test: ()=> {
          var domElements = $("#testArea > *");
          var target = domElements.eq(2)
          console.log(target.css('color'))
          if(target.attr('class') !== undefined){
            return 'third element should only have no classes'
          }
          
          if(target.css('color') !== 'rgb(255, 255, 0)'){
            return 'third element should be green (not lime green) but is not'
          }
          if(target.attr('id')!=='iShouldBeYellow'){
            return 'third element should have an id of iShouldBeYellow'
          }
          return true;
        }  
      }, 
    ]
  },

  functionToTest: 'testFunction1'
}]


