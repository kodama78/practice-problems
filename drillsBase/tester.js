function unitTest(testData) {
  for (var testI = 0; testI < testData.length; testI++) {
    var currentTestSet = testData[testI].testVals;
    for (var ioIndex = 0; ioIndex < currentTestSet.inputs.length; ioIndex++) {
      var testInputs = currentTestSet.inputs[ioIndex];
      var convertedInputs = currentTestSet.inputs[ioIndex].map( param=> typeof param==='function'?param.toString():param);
      var jsonInputs = JSON.stringify(convertedInputs, null, 2);
      var testOutputs = currentTestSet.outputs[ioIndex];
      var result = window[testData[testI].functionToTest].apply(null, testInputs);
      var jsonResult = JSON.stringify(result, null, 2);
      var jsonAnswer = JSON.stringify(testOutputs, null, 2);
      var status = 'incorrect';
      if (jsonResult === jsonAnswer) {
        status = 'correct';
      }
      displayMessage('<strong>Question ' + (testI + 1) + ' Test ' + (ioIndex + 1) + '&gt;&gt;&gt;</strong> ' + testData[testI].question, jsonInputs, jsonAnswer, jsonResult, status);
    }
  }
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
