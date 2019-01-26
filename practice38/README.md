### function reverse_t9(keys) {
 - make code that converts a number sequence to their equivalent letters according to a phone keypad
 - phones have letters on their keys that correspond to the number they are on.
 - write a function that converts from numbers to the corresponding letter given the following convention
   - the first number is the set of letters that can be accessed.  For example, 2 is a, b, or c
   - the next same numbers correspond to how many times the number will be pressed.  This Indicates which letter will be used.  For example, 22 is "b", 2 is "a", 222 is "c"
 - if 2 letters need to be sent that are on the same number, a space will separate them
   - for example if you want to send "c" and then "a", it would be "222 22".  "abc" would be "2 22 222"
   

### number reference on most phones

 - 1 has no letters
 - 2 is abc
 - 3 is def
 - 4 is ghi
 - 5 is jkl
 - 6 is mno
 - 7 is pqrs
 - 8 is tuv
 - 9 is wxyz
}
console.log(reverse_t9('44 444 44666 9 277733 99966688')); //hihowareyou

solution : http://jsbin.com/butapi/edit?js,console
