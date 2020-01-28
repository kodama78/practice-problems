function triangle(char, size) {
  let row = char;
  for (count = 0; count < size; count++) {
    console.log(row);
    row += char
  }
}
triangle('#', 7);
