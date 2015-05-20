# practice-problems
A repo containing some fun coding challenges. They are in no particular order.

## Bigger words

Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

- Write a function that takes two parameters
	- Parameter 1 - A string
	- Parameter 2 - An array of strings
- The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
- Example:
	- `var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];`
	- `biggerWords('whales', myArray);`
	- Output - `['reptile', 'mammoth', 'turtles']`

## Total Reverse 

Build a function that takes in an array and reverses it

- Write a function that takes one parameter
	- Parameter 1 - An array of anything
- The function should output an array that is in reverse order from the input array
- Example: 
	- `var myArray = ['hello', 45, 'Bob', 'what', '23'];`
	- `arrayReverse(myArray);`
	- Output - `['23', 'what', 'Bob', 45, 'hello']`
- Avoid using pre-built functions that do something similar

## One to Multi

Build a function that sorts an array into a multidimensional array grouped by data type

- Write a function that takes one parameter 
	- Parameter 1 - An array of anything
- The function should output a multidimensional grouped by data type
- Example: 
	- `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
	- `groupArray(myArray);`
	- Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

## Sort

Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order. 

- Write a function that takes one parameter
	- Parameter 1 - An Array of strings
- The function should output an array containing all the strings from the input array but in alphabetical order
- Example:
	-`var myArray = ['mouse', 'cat', 'dog', 'human'];`
	- `sort(myArray);`
	- Output - `['cat', 'dog', 'human', 'mouse']`
- Try doing this using a **Bubble Sort**, if you are unsure what that is <a href="https://www.google.com" target="_blank">Click Here</a>

## FizzBuzz

Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

- Write a function that takes no parameters
- The function should output the numbers 1 through 100, following the rules from above

## Spirals

Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter. 

- Write a function that takes one parameter
	- Parameter 1 - A number
- The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
- Example:
	- `fibSequence(12);`
	- Output - `0 1 1 2 3 5 8 13 21 34 55 89`
- If you are unfamiliar with the Fibonacci sequence <a href="https://www.google.com" target="_blank">Click Here</a>

## Igpay Atinlay

Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

- Write a function that takes one parameter
	- Parameter 1 - A string
- The function should output your input string translated into Pig Latin
	- Example: 
		- `var myString = "Hello my name is Stu"`
		- `translate(myString);
		- Output - `"ellohay ymay ameya siay tusay"`

#### Making it better!

- There are several more rules to Pig Latin, try incorporating as many as you can into your function.
	- There are different rules for words that start with vowel sounds or silent letters for example.
	- <a href="http://en.wikipedia.org/wiki/Pig_Latin">Here</a> is a link to an explanation of all the rules.
- Also try maintaining capitalization of words that are capitalized in your input string.
	- Example: 
		- `"Hello there"` would be `"Ellohay heretay"`

## More to come! 