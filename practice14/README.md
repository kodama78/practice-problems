## array factors

Build a function that takes one array and finds all other elements of the array that are factors of its an element

- Write a function that takes one parameter
	- Parameter 1 - an array of numbers
- The function should return an object with multiple arrays in it, one for each non-repeating number in the input array
- repeated numbers should not be added twice
- Example:
	- `arrayFactors([4,2,8,6,3,9]);`
	- Output - {
		4: [2],
		2: [],
		8: [4,2],
		6: [2,3],
		3: [],
		9: [3]
	}
