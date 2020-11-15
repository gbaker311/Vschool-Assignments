//loop through array and count how many "computers" there are
// var officeItems = [
//   "stapler",
//   "monitor",
//   "computer",
//   "desk",
//   "lamp",
//   "computer",
//   "lamp",
//   "stapler",
//   "computer",
//   "computer"
// ];

// let count = 0;

// for (let item of officeItems) {
//   if (item === "computer") count++;
// }
// console.log(count);

// //Loop through array and log to consolo "old enough" if they are 18 or older, and "not old enough" if they aren't 18
var madMax = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female"
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female"
  },
  {
    name: "Sam",
    age: 30,
    gender: "male"
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
];

for (let i = 0; i < madMax.length; i++) {
    if (madMax[i].age < 18) {
        console.log("Sorry, " + madMax[i].name + " you are not old enough");
    }   else {
        console.log("Come on in " + madMax[i].name + " you are over 18")
    }
}
// for (let i = 0; i < madMax.length; i++) {
//     console.log(madMax[i].age)

//     if (madMax[i].age < 18) {
//         if (madMax[i].gender === "male") {
//             console.log("Sorry " + madMax[i].name + " you are not old enough! Dont let him in!")
//         }   else {
//             console.log("Sorry " + madMax[i].name + ", you are too young, and women aren't aloud in!")
//         }   
//     }
// }

//Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// //The light is off to start with. Log to the console whether or not the light is on at the end.

// const arrays = [2, 3, 2];

// for (let i = 0; i <= arrays.length; i++) {
//     // console.log(arrays.length);
//     arrays.reduce(myFunc);
    


// }

