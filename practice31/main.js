function cococombomath ( num1, num2, num3, num4, num5) {
  var comboMath = num1 * num2;
  comboMath += num3;
  comboMath /= num4;
  comboMath -= num5;
  return comboMath;
}
console.log('test ', cococombomath(3,2,6,3,5));
