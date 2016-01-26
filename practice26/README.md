Create a function, search_array(), that does the following:

#### Input: 2 arrays
- haystack array, which has values to search through
- needle array, which has values to search for 
#### Output: 
- output array, which has all values in needle that are found in haystack
#### Example:
var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn']
var output = null;

output = search_array(haystack,needle);
console.log(output); //outputs ['dog','lizard'];
