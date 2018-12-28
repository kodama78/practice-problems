- getPath: given a path string, return an array with the different parts of the path for 
	- example: 'folder1/folder2/folder3' 
	- returns ['folder1','folder2','folder3']

- getPathParts: Given a full URL string, break it up into parts in an object For 	
	- example: 'http://localhost:8000/happy/go/lucky/file.html' 
	- return { protocol: 'http', host: 'localhost', port: 8000, path: '/happy/go/lucky', file: 'file.html' }

- getCapitalCount: given an array of words, return a count of how many start with capital letters, For 
	- example: ['it','will','not','Be','long','Till','we','Are'] 
	- returns: 3

- correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for 
	- example: [ 
		{ num1: 3, num2: 3, op: '/', result: 3}, 
		{ num1: 12, num2: 4, op: '-', result: 8}, 
		{ num1: 2, num2: 3, op: '+', result: 5}, 
		{ num1: -5, num2: -2, op: '*', result: 10} 
	] 
	- returns [ 
		{ num1: 12, num2: 4, op: '-', result: 8}, 
		{ num1: 2, num2: 3, op: '+', result: 5} 
	]