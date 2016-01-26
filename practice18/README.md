### calculate multi average
Create a function, average_array, that calculates the average of an arbitrary area of a multi-dimensional array, that does the following:
- Takes a multi-dimensional array
- Takes an number describing size of an area to calculate the average of
- Outputs an array of the same size as the multi-dimensional array, but with all sampled values set to the calculated average of those elements

#### Input: 
- input_array: a multi-dimensional array of numbers
- average_size: a number representing a block of area to be averaged

#### Output: 
- output_array: a multi-dimensional array of numbers the same size as the input array, but with batches of numbers replaced

#### Example:
```
<pre>
var input_array = 
[
	[1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
	[0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
	[5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
	[6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
]
var average_size = 2</pre>
```
Output:
```
<pre>
output = [
	[1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
	[1.5, 1.5, 4.2, 4.2, 4.0, 4.0, 5.2, 5.2, 5.5, 5.5],
	[5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0],
	[5.5, 5.5, 4.0, 4.0, 5.0, 5.0, 3.5, 3.5, 3.0, 3.0]
]</pre>
```
So, for example, you would take the values from input_array[0][0], input_array[0][1], input_array[1,0], and intput_array[1,1], add them all together, divide by the total number of cells added, and then place that value back into all the cells sampled

