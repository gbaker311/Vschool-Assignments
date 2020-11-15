//  Write a function that takes an array of numbers and returns the largest (without using Math.max())

// function largestNumber(arr) {
//     let arrValue = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arrValue) {
//             arrValue = arr[i];
//         }
//     }   return arrValue;
// }
// console.log(largestNumber([3, 5, 2, 8, 1]))

// Write a function that takes an array of words and a character and returns each word that has that character present.


const lettersWithStrings = (arr, symbol) =>
  arr.filter(item => item.includes("!"));

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey"], "hey!"));

// console.log(lettersWithStrings(['#3', '$$$', 'C%4!', 'Hey!'], '!')); // => ["C%4!", "Hey!"]

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
//  const isDivisible = (num1, num2) => (num1 % num2 === 0 ? true : false);
//  console.log(isDivisible(10, 5))
