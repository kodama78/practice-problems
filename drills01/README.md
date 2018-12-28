- sumArray: given an array of numbers, add up all the numbers for 
	- example: [1,5,3,2,6]
	- returns 17

- fitWithinVal: given an array and a number, sum the array until you reach the number. keep adding any values that would total below the given value return an array of every number you could add For example: 
	- input: [1,100,2,4,5,6], 7) 
	- return [1,2,4]

- getAllNamesShorterThan: Given an array of names and a value, return an array of only the names shorter than the given value for example: 
	- input ['Clyde','Sue','Jerry','Jo'], 4 
	- return ['Sue','Jo']

- given an object with data for a person in it, generate a shipping label in the following form:
	- input: 
		[
  {
    "familyName": "McGee",
    "givenName": "Chuckles",
    "greeting": "Miss.",
    "age": 28,
    "height": 165,
    "colors": {
      "eye": "green",
      "hair": "green"
    },
    "home address": {
      "streetNumber": "12345",
      "streetName": "Any St",
      "state": "Mo",
      "zip": 63102,
      "city": "Kansas City"
    }
  }
]
	- return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"