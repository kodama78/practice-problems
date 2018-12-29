- changeElements: Change any element with a given class (for example "numConvert")
	- grab their text, which will be a number in word form (ie one, three, nine)
	- The numbers will only be from one to nine
	- Change their text to the numeric form (1-9)
	- If it doesn't understand the word, it leaves it unchanged

- appendTextToElement: given a particular element, replace its text with the original text plus the word 2nd parameter given.
	- For example, if you got changeElements('.helloElements','hello'), all elements with a class of helloElements would have their text concatenated with "hello"
 	- For example, if the text of the element was "yo", it would be changed to "yohello"`,


- addClass: Make a function that takes in 2 strings.  The first selector it looks for, the 2nd it adds as a class
	- For example, if you had addClass(".haha","hehe"), then every element
	- with a class of haha would now also have a class of hehe.
  Additionally, return the number of elements so changed`,

- removeElements: given a particular selector, remove any element that matches that selector