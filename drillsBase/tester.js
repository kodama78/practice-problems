$(document).ready( prepPage );

function unitTest(testData) {
  for (var testI = 0; testI < testData.length; testI++) {
    var currentTestSet = testData[testI].testVals;
    for (var ioIndex = 0; ioIndex < currentTestSet.inputs.length; ioIndex++) {
      var testInputs = currentTestSet.inputs[ioIndex];
      var convertedInputs = currentTestSet.inputs[ioIndex].map( param=> typeof param==='function'?param.toString():convertFunctionContentsToString(param));
      var jsonInputs = JSON.stringify(convertedInputs, null, 2);
      var testOutputs = currentTestSet.outputs[ioIndex];
      if(typeof window[testData[testI].functionToTest] !== 'function'){
        console.error(testData[testI].functionToTest + ' is not defined.  Did you rename/remove it from yourcode.js?');
        return false;
      }
      var result = window[testData[testI].functionToTest].apply(null, testInputs);
      var jsonResult = JSON.stringify(result, null, 2);
      var testFunction = ()=>true;
      var testResult = true;
      var testErrorMessage = false;
      if(currentTestSet.testFunctions && currentTestSet.testFunctions[ioIndex]){
        var testFunction = currentTestSet.testFunctions[ioIndex].test;
        testErrorMessage = currentTestSet.testFunctions[ioIndex].message;
        testResult = testFunction(result);
        if(testResult === true){
          testErrorMessage = "Passed: " + testErrorMessage;
        } else {
          var additionalMessage = testResult!==false ? testResult : '';
          testErrorMessage = "Failed: " + testErrorMessage + '<br>' + testResult;
        }
      }
      
      if(typeof testOutputs === 'function'){
        testOutputs = testOutputs.apply(null, testInputs);
      }
      var jsonAnswer = JSON.stringify(testOutputs, null, 2);
      var status = 'incorrect';
      if (jsonResult === jsonAnswer && testResult===true) {
        status = 'correct';
      }
      displayMessage({
        questionText: '<strong>Question ' + (testI + 1) + ' Test ' + (ioIndex + 1) + '&gt;&gt;&gt;</strong> ' + testData[testI].question, 
        inputs: convertedInputs, 
        expected: jsonAnswer, 
        answer: jsonResult, 
        mode: status, 
        functionTestMessage: testErrorMessage,
        functionName: testData[testI].functionToTest
      });
    }
  }
}
//function displayMessage(questionText, inputs, expected, answer, mode, functionTestMessage) {

function convertFunctionContentsToString(content){
  function testFunction(item){
    if(typeof item === 'function'){
      return item.toString();
    }
    return item;
  }
  if(Array.isArray(content)){
    return content.map( testFunction )
  } else if(typeof content==='object'){
    for(var key in content){
      content[key] = testFunction(content[key]);
    }
  }
  return content;
}
function prepPage(){
  $("#runTestButton").click( handleStartTest );
  $("#runAuto").click( setRunAutomatically)
  if(localStorage.testRunAutomatically === 'true'){
    $("#runAuto").attr('checked','checked');
    unitTest(testVals);
  }
}
function setRunAutomatically(){
  if(this.checked){
    localStorage.testRunAutomatically='true';
  } else {
    localStorage.testRunAutomatically='false';
  }
}

function handleStartTest(){
  unitTest(testVals);
}

function displayMessage( dataOptions ) {
  var {questionText, inputs, expected, answer, mode, functionTestMessage, functionName} = dataOptions;
  var questionContainer = $("<div>", {
    html: questionText,
    'class': 'question'
  });
  inputs = inputs.map( input => JSON.stringify(input, null, 2));
  var inputContainer = $("<div>", {
    //html: '<pre class="inputs">Test Inputs:\n' + inputs + "</pre>"
    html: `<pre class="inputs"> Test call: ${functionName}(${inputs.join(',')})`
  })
  var resultContainer = $("<div>", {
    'class': mode,
    text: mode.toUpperCase() + '!'
  })
  var answerContainer = $("<div>", {
    'class': mode,
    html: `<aside>Expected:</aside> <pre>${expected}</pre><aside>Your answer:</aside><pre>${answer}<pre>`
  })
  var testContainer = ''
  if(functionTestMessage){
    testContainer = $("<div>", {
      'class': mode,
      html: `<aside>Additional Test:</aside> ${functionTestMessage}`
    })
  }
  
  questionContainer.append(inputContainer, resultContainer, answerContainer, testContainer);
  $("body").append(questionContainer);
}
