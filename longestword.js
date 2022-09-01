const longestWord = (str) => {
  const words = str.split(" ");
  let longestWord = " ";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(longestWord("I love javascript so much"));
console.log(longestWord("I fall in love with js thanks to me who rejects me!"));
