// Preliminaries

// Write a for loop that prints to the console the numbers 0 through 9.
// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// for (let i = 0; i <= 9; i++)
//          console.log(i);

// Write a for loop that prints to the console 9 through 0.

// for (i = 9; i >= 0; i--) {
//   console.log(i);
// }

// Write a for loop that prints these fruits to the console.

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// BRONZE!!!!!!!!!!!!!

//write a for loop that pushes the numbers 0 through 9 to an array

// const arr = [];

// for (let i = 0; i <= 9; i++) {
//     arr.push(i);
// }
// console.log(arr)

// Write a for loopp that prints only even numbers 0 to 100

// for (var i = 0; i <= 100; i += )
//     console.log(i);

// write a for loop that will push every other fruit to an array

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 0; i < fruit.length; i += 2) {
//     console.log(fruit[i])
// }

//  SILVER MEDAL !!!!!

// Write a loop that will print out all the names of the people of the people array

// const peopleArr = [
//   {
//     name: "Greg Baker",
//     occupation: "web dev"
//   },
//   {
//     name: "Tom Cruise",
//     occupation: "Actor"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ];

// const silver = function() {
//     for (var i = 0; i < peopleArr.length; i++) {
//         console.log(peopleArr[i].name)
//     }
// }

// silver();

// // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// const peopleNames = []
// const peopleOccupations = []

// for (var i = 0; i < peopleArr.length; i++) {
//     peopleNames.push(peopleArr[i].name);
//     peopleOccupations.push(peopleArr[i].occupation);
// }
// console.log(peopleNames);
// console.log(peopleOccupations);

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

// var peoplesNamesEven = []
// var peopleOccupationsEven = []

// for (var i = 0; i < peopleArr.length; i += 2) {
//     peoplesNamesEven.push(peopleArr[i].name);
//     peopleOccupationsEven.push(peopleArr[i].occupation);
// }
// console.log(peoplesNamesEven, peopleOccupationsEven)

// GOLD MEDAL!!!! NESTING
//Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]
// var grid = []

// for (var i = 0; i < 3; i++) {
//     grid.push([]);
//     for (var j = 0; j < 3; j++) {
//         grid[i].push(0);
//     }
// }
// console.log(grid)

// 2.Create an array that mimics a grid like the following using for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// var grid2 = []
// for (var i = 0; i < 3; i++) {
//     grid2.push([])
//     for (j = 0; j < 3; j++) {
//         grid2[i].push(i);
//     }
// }
// console.log(grid2);

// 3.Create an array that mimics a grid like the following using for loops:
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

// var grid3 = [];
// for (var i = 0; i < 3; i++) {
//   grid3.push([]);
//   for (j = 0; j < 3; j++) {
//     grid3[i].push(j);
//   }
// }
// console.log(grid3);

// Given a grid like the previous ones, write a for loop that would change every number to an x.
// var grid = [[0, ...],
//             [0, ...],

//             [0,...], ..

// var xGrid = function(myGrid) {
//   for (var i = 0; i < myGrid.length; i++) {
//     for (j = 0; j < myGrid[i].length; j++) {
//       myGrid[i].splice(j, 1, "x");
//     }
//   }
//   return myGrid;
// };
// console.log(xGrid(grid3));
