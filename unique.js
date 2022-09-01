// const uniqueValue = (str) => {
//   let isUnique = true;
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === str[i]) {
//       isUnique = false;
//     }
//   }
//   return isUnique;
// };
// console.log(uniqueValue("abcdef"));
// console.log(uniqueValue("abcdef"));

const ages = [12, 1, 34, 56, 7, 4];
const vals = ages.find((age) => {
  return age > 12;
});

// function checkAge(age) {
//   return age >= 12;
// }
const val = [];
val.fill(12);
console.log(val);
