let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const n = 8;
const centerNumber = Math.round(numbers.length / 2);

if (n > centerNumber) {
  console.log("Your number is greater than 5");
} else if (n < centerNumber) {
  console.log("Your number is lesser than 5");
} else {
  console.log("Your number is equal to 5");
}
