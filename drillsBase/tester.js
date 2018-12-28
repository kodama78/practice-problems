$(document).ready( prepPage );

function unitTest(testData) {
  for (var testI = 0; testI < testData.length; testI++) {
    var currentTestSet = testData[testI].testVals;
    for (var ioIndex = 0; ioIndex < currentTestSet.inputs.length; ioIndex++) {
      var testInputs = currentTestSet.inputs[ioIndex];
      var convertedInputs = currentTestSet.inputs[ioIndex].map( param=> typeof param==='function'?param.toString():convertFunctionContentsToString(param));
      var jsonInputs = JSON.stringify(convertedInputs, null, 2);
      var testOutputs = currentTestSet.outputs[ioIndex];
      var result = window[testData[testI].functionToTest].apply(null, testInputs);
      var jsonResult = JSON.stringify(result, null, 2);
      if(typeof testOutputs === 'function'){
        testOutputs = testOutputs.apply(null, testInputs);
      }
      var jsonAnswer = JSON.stringify(testOutputs, null, 2);
      
      var status = 'incorrect';
      if (jsonResult === jsonAnswer) {
        status = 'correct';
      }
      displayMessage('<strong>Question ' + (testI + 1) + ' Test ' + (ioIndex + 1) + '&gt;&gt;&gt;</strong> ' + testData[testI].question, jsonInputs, jsonAnswer, jsonResult, status);
    }
  }
}
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

function displayMessage(questionText, inputs, expected, answer, mode) {
  var questionContainer = $("<div>", {
    html: questionText,
    'class': 'question'
  });
  var inputContainer = $("<div>", {
    html: '<pre class="inputs">Test Inputs:\n' + inputs + "</pre>"
  })
  var resultContainer = $("<div>", {
    'class': mode,
    text: mode.toUpperCase() + '!'
  })
  var answerContainer = $("<div>", {
    'class': mode,
    html: `<aside>Expected:</aside> <pre>${expected}</pre><aside>Your answer:</aside><pre>${answer}<pre>`
  })
  questionContainer.append(inputContainer, resultContainer, answerContainer);
  $("body").append(questionContainer);
}
