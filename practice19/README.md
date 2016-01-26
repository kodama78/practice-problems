### sort objects by name

Create a function, sort_object_list_by_name(), that does the following:
- Takes a list of objects, and returns an array of those objects, sorted by their property 'name'

#### Input: 
- input_array: an array of objects

#### Output: 
- output_array, an array sorted by the 'name' field of each object

#### Example:
<pre>
var input_array = 
[
	{name: 'John', age:42, gender:'M'},
	{name: 'Jack', age:34, gender:'M'},
	{name: 'Michael',age:40, gender: 'M'},
	{name: 'Kendra',age:48, gender:'F'}
]</pre>

output = find_factors(input_array);
console.log(output); //outputs 
<pre>[
	{name: 'Jack', age:34, gender:'M'},
	{name: 'John', age:42, gender:'M'},
	{name: 'Kendra',age:48, gender:'F'},
	{name: 'Michael',age:40, gender: 'M'}
]</pre>

#### Put your solution in answer.js

- hint: <a href="http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/" target="_blank">Here</a> is an example of a bubble sort in both psuedo-code and javascript which can serve as the basis of your sorting function.