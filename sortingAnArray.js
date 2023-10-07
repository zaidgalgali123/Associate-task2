function sortArrayDescending(arr) {
  // Sort the array in descending order
  return arr.sort((a, b) => b - a);
}

let numbers = [5, 2, 9, 1, 5, 6];
let sortedArray = sortArrayDescending(numbers);
console.log(sortedArray); // Output: [9, 6, 5, 5, 2, 1]
