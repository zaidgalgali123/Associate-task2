function reverseWords(sentence) {
  let words = sentence.split(" ");

  let reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  let reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}

let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence); // Output: "shiT si a ynnus yad"
