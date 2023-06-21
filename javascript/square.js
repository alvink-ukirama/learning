let string = "";
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    if (i == 1 || j == 5 || j == 1 || i == 5) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);

console.log(" ");

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    if (i == j || j == 1 || i == 5) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
