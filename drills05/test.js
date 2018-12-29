


var testVals = [{
  question: `populateRecords: given an array of objects,
  each contains a purchase record.  See example below for what it should look like
  Return an object with the total amount of charges 
  and the total amount charges and cash advances in an object, like this: 
  { charge: 27.50, 'cash advance': 40.10 }
  Contain each section in an element with a class of "testOutput"
  Convenient classes exist in the test.css file for you to use
  `,
  testVals: {
    inputs: [
        [[
          { type: 'charge', source: 'Lowes', amount: '23.50'},
          { type: 'charge', source: 'Applebees', amount: '17.30'},
          { type: 'cash advance', source: 'BofA', amount: '40.00'},
          { type: 'charge', source: 'AT&T', amount: '130.00'},
          { type: 'cash advance', source: 'Chase', amount: '20.00'}
        ]], 
        [[
          { type: 'charge', source: 'Fudruckers', amount: '23.50'},
          { type: 'charge', source: 'Carls Junior', amount: '17.30'},
          { type: 'charge', source: 'McDonalds', amount: '40.00'},
          { type: 'charge', source: 'Olive Garden', amount: '31.20'},
          { type: 'charge', source: 'Heart Doctor', amount: '1000.00'}
        ]],
      
    ],
    outputs:    
    [  {
          "charge": 170.8,
          "cash advance": 60
        },
       {
          "charge": 1112,
          "cash advance": 0
        },
    ],
    testFunctions: [
      {
        message: 'Charges must be listed in the order shown in the image: <img src="outputscreen1.png" class="exampleImage">',
        test: ()=> {
          const expected = [
            ['charge','Lowes','23.50'],
            ['charge','Applebees','17.30'],
            ['cash advance','BofA','40.00'],
            ['charge','AT&T','130.00'],
            ['cash advance','Chase','20.00']
          ];
          const firstSection = $(".testOutput:nth-child(1)");
          const testArray = [];
          const children = firstSection.find('*').each( (index, element) => {
            testArray.push( $(element).text());
          });
          var answer = expected.filter( set =>{
            const location = testArray.indexOf(set[1]);
            console.log(`${$(children[location-1]).text()} === ${testArray[location-1]} 
            ${$(children[location+1]).text()} === ${testArray[location+1]}`)

            return $(children[location-1]).text() === testArray[location-1]
                                        &&
                   $(children[location+1]).text() === testArray[location+1]
          }).length === expected.length;
          console.log(answer);
          return answer;
          
        }
        
      },
      {
        message: 'Charges must be listed in the order shown in the image: <img src="outputscreen2.png" class="exampleImage">',
        test: ()=> {
          const expected = [
            ['charge', 'Fudruckers', '23.50'],
            ['charge', 'Carls Junior', '17.30'],
            ['charge', 'McDonalds', '40.00'],
            ['charge', 'Olive Garden', '31.20'],
            ['charge', 'Heart Doctor', '1000.00']
          ];
          const firstSection = $(".testOutput:nth-child(2)");
          const testArray = [];
          const children = firstSection.find('*').each( (index, element) => {
            testArray.push( $(element).text());
          });
          var answer = expected.filter( set =>{
            const location = testArray.indexOf(set[1]);
            console.log(`${$(children[location-1]).text()} === ${testArray[location-1]} 
            ${$(children[location+1]).text()} === ${testArray[location+1]}`)

            return $(children[location-1]).text() === testArray[location-1]
                                        &&
                   $(children[location+1]).text() === testArray[location+1]
          }).length === expected.length;
          console.log(answer);
          return answer;
          
        }
        
      }
    ]
  },

  functionToTest: 'populateRecords'
}]


