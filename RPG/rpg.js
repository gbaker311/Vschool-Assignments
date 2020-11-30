
let isAlive = true;
let driving = true;
let gotAway = false;
let hasWon = false;

const readlineSync = require("readline-sync");

const name = readlineSync.question(
  "Hello my friend, welcome to the truck drivers mountain racing driving challenge!! May I please have your name?\n "
);

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

darthMaul.weapons.push("knife");

const driver = new Driver(name, "freitliner", "100", "100", "100");

console.log(
  `Hello there ${name}! 'You start on top of a very tall and steep mountain, please watch out for enemies on your trip\n`
);

while (isAlive && !hasWon) {
  gotAway = false;
  const action = readlineSync.keyIn(
    "What route would you like to take? Your choices are to [T] through the tall dead pine trees. [C] through the cave. [D] down the steep, windy road. [Q] quit.\n",
    { limit: "TCDQ" }
  );

  if (action === "t") {
    throughTree();
    console.log(`Okay ${name}, get to ready to roll!`);
  } else if (action === "c") {
    cave();
  } else if (action === "d") {
    downSteepRoad();
  } else {
    console.log(`oh come on ${name}! come back when you grow a pair! `);
    process.exit();
    console.clear();
  }

  function throughTree() {
    let random = Math.floor(Math.random() * 4);
    if (random === 2) {
      driver.weapons.push("grenade");
      console.log(`you picked up a grenade!`);
    } else {
      console.log("nothing happened! \n");
    }
    // while (driving = true & isAlive) {
    // let fuelLevel = 50;
    console.log(random);
  }
}
function downSteepRoad() {
  let random = Math.floor(Math.random() * 4);
  driver.fuelLevel -= 25;
  if (random === 0) {
    encounter();
  } else if (random === 2) {
    console.log(
      `What a love day to drive!`
    );
  }
}
function cave() {
  encounter();
}

function encounter() {
  let random = Math.floor(Math.random() * enemies.length);
  const newEnemy = enemies[random];
  console.log(`Oh no!!! looks like you have encountered ${newEnemy.name}`);
  const action = readlineSync.keyIn(
    "Would you you like to fight [f], or haul your ass out of here?`[r], quit [q]",
    { limit: "frq" }
  );
  if (action === "f") {
    fight(newEnemy);
  } else if (action === "r") {
    run();
  } else if (action === "q") {
    isAlive = false;
  }
}

function fight(newEnemy) {
  while (driver.greg.hp > 0 && enemy.hp > 0 && !gotAway) {
    let action = ask.keyIn("Do you want to fight [f], or run [r]?", {
      limit: "fri"
    });
    if (action === "f") {
      attackEnemy(enemy);
      enemyAttack(enemy);
    } else if (action === "r") {
      run();
    } else if (action === "i") {
      useItem();
    }
  }
}
if (driver.greg.hp > 0) {
  console.log(
    `Well done! ${greg.name}, you destroyed ${enemy.name}!, keep it up!`
  );
  enemies.splice(enemies.indexOf(enemy), 1);
  if (enemies.length === 0) {
    console.log(`Well done ${greg.name}!`);
    hasWon = true;
  } else {
    console.log(`${enemy.name} kicked your ass!!`);
    isAlive = false;
  }
}

function useItem() {
  if (item === "grenade") {
    driver.greg.hp += 100;

  } else if (item === "hammer") {
    enemy.hp = -50;
  }
}

function attackEnemy(enemy) {
  let random = Math.floor(Math.random() * greg.ap) + 30;
  enemy.hp -= random;
  console.log(
    `Great job ${greg.name}, you hit ${enemy.name}! their hp is now ${enemy.hp}`
  );
}

function enemyAttack(enemy) {
  let random = Math.floor(Math.random() * enemy.ap);
  driver.greg.hp -= random;
  console.log(`Uh oh!, ${enemy.name} hit you, your hp is now ${greg.hp}`);
}
function run(enemy) {
  let random = Math.random(Math.random() * 4);
  if (random === 0) {
    console.log("You got away!");
    gotAway = true;
  } else {
    fight(enemy);
  }
}
