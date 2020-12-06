const readline = require('readline-sync');
let isAlive = true;
let hasWon = false;

const name = readline.question('Hello there my friend, can I please have your name? ');


class Driver {
  constructor(name, truck, hp, ap, weapons, fuelLevel = 100) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.truck = truck;
    this.fuelLevel = fuelLevel;
    this.weapons = [];
  }
}
Driver.prototype.honk = function() {
  console.log("bluurrrrrp");
};
// this is you
const driver = new Driver(name, "freitliner", "100", "100", "100");
// these guys are the enemies

const truckerBob = new Driver("trucker Bob", "F-150", "80", "100", "100");
const crazyTrucker = new Driver("crazy trucker", "Tacoma", "75", "80", "50");
const darthMaul = new Driver(
  "Darth Maul",
  "Flying Semi-truck",
  "100",
  "50",
  "25"
);

const enemies = [truckerBob, crazyTrucker, darthMaul];

while (isAlive && !hasWon) {
  const action = readline.keyIn("Your up in the High mountains, what would you like to do? [W] walk, [P] print inventory, or [Q] quit ", {limit: 'wpq'});

  if (action === 'w') {
    walk()
  } else if (action === 'p') {
    greg.inventory.push("knife")
    printInventory()
  } else if (action === 'q') {
    isAlive = false;
    hasWon = true;
    console.log("You quit the game")
  }
}



function walk(){
  const random = Math.floor(Math.random() * 4)
  if (random === 0) {
    enemyEncounter()
  } else {
    console.log("You walk safely")
  }
}

function enemyEncounter(){
  const random = Math.floor(Math.random() * enemies.length)
  const enemy = enemies[random]
}

function printInventory(){

  console.log(greg.inventory)
}

function fight(){

}

function attackEnemy(){

}

function enemyAttack(){

}

function die(){

}

function enemyDie(){

}
// let isAlive = true;
// let hasWon = false;
// let gotAway = false;

// let name = ask.question("What is your name?");

// class Hero {
//   constructor(name, hp, ap) {
//     this.name = name;
//     this.hp = hp;
//     this.ap = ap;
//     this.inventory = ['potion', 'sword']
//   }
// }
// const greg = new Hero(name, 100, 50);

// class Enemy {
//   constructor(name, hp, ap) {
//     this.name = name;
//     this.hp = hp;
//     this.ap = ap;
//   }
// }
// class Driver {
//   constructor(name, truck, age, experience, riskTolerance) {
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//     this.riskTolerance = riskTolerance;
//     this.truck = truck;
//   }
// }
// Driver.prototype.honk = function() {
//   console.log("bluurrrrrp");
// };

// const truckerBob = new Driver("trucker Bob", 100, 50);
// const crazyTrucker = new Driver("crazy trucker", 75, 50);
// const darthMaul = new Enemy("Darth Maul", 50, 25);

// const enemies = [darthMaul, truckerBob, crazyTrucker, darthMaul];

// // game loop starts here
// while (isAlive && !hasWon) {
//   gotAway = false;
//   let action = ask.keyIn(
//     "Would you like to walk [w], print inventory [p] or quit [q]?",
//     { limit: "wqp" }
//   );
//   if (action === "w") {
//     walk();
//   } else if (action === "p") {
//     printInventory();
//   } else {
//     console.log("you quit");
//     isAlive = false;
//     hasWon = false
//   }
// }

// function walk() {
//   let random = Math.floor(Math.random() * 4);
//   if (random === 3) {
//     encounter();
//   } else {
//     console.log("nothing happened \n");
//   }
// }
// function encounter() {
//   let random = Math.floor(Math.random() * enemies.length);
//   const newEnemy = enemies[random];
//   console.log(`Oh no!!! looks like you have encountered ${newEnemy.name}`);
//   const action = ask.keyIn(
//     "Would you you like to fight [f], or haul your ass out of here?`[r], quit [q]",
//     { limit: "frq" }
//   );
//   if (action === "f") {
//     fight(newEnemy);
//   } else if (action === "r") {
//     run();
//   } else if (action === "q") {
//     isAlive = false;
//   }
// // }
// function fight(enemy) {
//   while (greg.hp > 0 && enemy.hp > 0 && !gotAway) {
//     let action = ask.keyIn("Do you want to fight [f], or run [r]?", {
//       limit: "fri"
//     });
//     if (action === "f") {
//       attackEnemy(enemy);
//       enemyAttack(enemy);
//     } else if (action === "r") {
//       run();
//     } else if (action === "i") {
//       useItem();
//     }
//   }
// }
// if (greg.hp > 0) {
//   console.log(
//     `Well done! ${greg.name}, you destroyed ${enemy.name}!, keep it up!`
//   );
//   enemies.splice(enemies.indexOf(enemy), 1);
//   if (enemies.length === 0) {
//     console.log(`Well done ${greg.name}!`);
//     hasWon = true;
//   } else {
//     console.log(`${enemy.name} kicked your ass!!`);
//     isAlive = false;
//   }
// }
// function useItem() {
//   random
//   if (item === "potion") {
//     greg.hp += 100
//   } else if (item === "sword") {
//     enemy.hp =- 50
//   }

// }

// function printInventory() {
//   console.log(greg.inventory);
// }

// function attackEnemy(enemy) {
//   let random = Math.floor(Math.random() * greg.ap) + 30;
//   enemy.hp -= random;
//   console.log(
//     `Great job ${greg.name}, you hit ${enemy.name}! their hp is now ${enemy.hp}`
//   );
// }
// function enemyAttack(enemy) {
//   let random = Math.floor(Math.random() * enemy.ap);
//   greg.hp -= random;
//   console.log(`Uh oh!, ${enemy.name} hit you, your hp is now ${greg.hp}`);
// }
// function run(enemy) {
//   let random = Math.random(Math.random() * 4);
//   if (random === 0) {
//       console.log("You got away!");
//       gotAway = true;
//   } else {
//       fight(enemy);
//   }
// }