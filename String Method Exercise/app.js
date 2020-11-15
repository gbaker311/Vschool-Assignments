//  Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// function capilizeAndLowercase(str) {
//     return str.toUpperCase() + str.toLowerCase();
// }
// console.log(capilizeAndLowercase("this is a string "))

// addTwo(num1, num2)

// => "THIS IS A STRINGthis is a string"

//  Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down. Hint: You'll need to use Math.floor().

// function roundDown(str) {
//   return Math.floor(str.length / 4);
// }
// // console.log(roundDown("hello"))

// console.log(roundDown("Hello World")); // => 5

//  Write a function that uses slice() and the other functions you've written to return the first half of the given string.

// function firstHalf(str) {
//     const newWord = str.slice(1, 3)
//     console.log(newWord)
//     return Math.floor(str.length / 2);
    
// }
// console.log(firstHalf("hello world how are you today"))

//  Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
//  If your string length is odd, use Math.floor() to round down.

function oneTwo(str) {
    let totalLength = Math.floor(str.length / 2)
    let uC = str.slice(0, totalLength)
    let lC = str.slice(str.length - totalLength)
    return uC.toUpperCase() + lC.toLowerCase();
}
console.log(oneTwo("hey there how are you"));
