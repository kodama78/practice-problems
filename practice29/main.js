function do_math( num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*' || operator === 'x' || operator === 'X') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
}
console.log("do_math ", do_math(5,2,'/'));
