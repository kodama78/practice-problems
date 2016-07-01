## Roman Numerals

Build a function takes in a number and converts it to roman numerals

#### Roman <a href="http://www.roman-numerals.org/chart100.html" target="_blank">numeral conversion:</a>
- Base roman digits
  - 1 : I
  - 5 : V
  - 10: X
  - 50 : L
  - 100 : C
  - 500: D
  - 1000 : M
- Writing numbers other than base digits:
  - larger than base digit and smaller than next base digit, concatenate them together
    - 2 is II.  3 is III
  - Smaller than base digit: Writen as the base digit minus whatever smaller digits come before it, so for example
    - 4 is 5 minus 1, or IV
  - Larger than base digit: Writen as the base digit plus whatever smaller digits after it, totally up to the number, so for example
    - 6 is 5 plus 1, or VI
    - 11 is 10 plus 1, or XI
    - 56 is 50 plus 5 plus 1, or LVI
    - 67 is 50 plus 10 plus 5 plus 2, or LXVII
  

- Write a function that takes one parameter
	- Parameter 1 - A number
- The function should output an a string with the corresponding roman numerals
- Example: 
	- `var the_number = 62;`
	- `romanNumerals(the_number);`
	- Returns - `LXIIV`
