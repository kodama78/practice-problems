function triangle(char, size) {
  let row = char;
  for (count = 0; count < size; count++) {
    console.log(row);
    row += char;
  }
}
triangle('#', 7);

/* book solution:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/
