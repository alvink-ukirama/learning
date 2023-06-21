// const itemID
// const itemName
// const userID
// const userName
// const price
// const quantity

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]; //declare array
for (i = 0; i <= 19; i++) {
  //loop all array
  if (i % 6 === 0) {
    //check if the number is 3 number
    console.log(num[i]); // print every third number
  }
}
