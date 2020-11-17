const readline = require('readline-sync');


function startGame() {
    const steps = {
      start: {
        message: "Do you want to play a game?",
        yes: "firstStep"
      },
      end: {
        message: "You've lost either way. Do you want to play again?",
        yes: "start",
        no: () => {
          console.clear();
        }
      },
      firstStep: {
        message: "Do you agree?"
      }
      // put your steps here
    };
  
    let currentStep = "start";
  
    function logStep() {
      const step = steps[currentStep];
  
      if (step) {
        console.log(`${step.message || ""} Y/N`);
      }
    }
    function handleAnswer(agree) {
      let step;
  
      if (agree) {
        step = steps[currentStep].yes;
      } else {
        step = steps[currentStep].no;
      }
  
      if (typeof step === "function") {
        step();
        return;
      }
      
      if (typeof step === "string") {
        currentStep = step;
      } else {
        currentStep = "end";
      }
      
      logStep();
    }
  
    document.addEventListener("keydown", args => {
      const key = args.key.toLowerCase();
  
      if (key === "y") {
        handleAnswer(true);
      } else if (key === "n") {
        handleAnswer(false);
      }
    });
  
    console.clear();
    logStep();
  }
  
  startGame();


// const commands = [
//   "w",
//   "walk",
//   "u",
//   "use",
//   "p",
//   "print",
//   "q",
//   "quit",
//   "h",
//   "help"
// ];

// class Character {
//     constructor(name, job, health, status) {

//     }
// }

// class Truck {
//     constructor(make, model, year, airHorn) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.airHorn = airHorn;
//     }
// }

// const semiTruck = new Truck("Freitliner", "Cascadia", 2020, "Bluuuuuuuurp")

// Truck.prototype.airHorn = function() {
//     console.log("Bluuuuuuuurp!!!")
// }
// console.log(semiTruck.airHorn)
