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

const truckerBob = new Driver("trucker Bob", "F-150", 80, 100, 200);
const crazyTrucker = new Driver("crazy trucker", "Tacoma", 75, 80, 50);
const darthMaul = new Driver("Darth Maul", "Flying Semi-truck", 100, 50, 25);

const enemies = [truckerBob, crazyTrucker, darthMaul];

darthMaul.weapons.push("knife");

const driver = new Driver(name, "freitliner", 100, 100, 100);

console.log(
  `Hello there ${name}! You start on top of a very tall and steep mountain, please watch out for enemies on your trip\n`
);

while (isAlive && !hasWon && driving) {
  gotAway = false;
  const action = readlineSync.keyIn(
    "What route would you like to take? Your choices are to [T] through the tall dead pine trees. [C] through the cave. [D] down the steep, windy road. [Q] quit\n",
    {
      limit: "TCDQ"
    }
  );

  if (action === "t") {
    throughTree();
    console.log(`Okay ${name}, watch out for fallen trees!`);
    console.log(`Your fuel in the ${driver.truck} is at ${driver.fuelLevel}`);
  } else if (action === "c") {
    cave();
  } else if (action === "d") {
    downSteepRoad();
  } else {
    console.log(`oh come on ${name}! come back when you grow a pair! `);
    process.exit();
    console.clear();
  }
}

function throughTree() {
  let random = Math.floor(Math.random() * 4);
  driver.fuelLevel -= 5;
  if (random === 2) {
    driver.weapons.push("grenade");
    console.log(`you picked up a grenade!`);
    const action = readlineSync.keyIn(
      "What would you like to do?: [f] Find someone to fight, [p] print inventory, [c] choose another path, or [q] quit.\n",
      {
        limit: "fcqp"
      }
    );
    if (action === "f") {
      let newEnemy = enemies[Math.floor(Math.random() * enemies.length)];
      fight(newEnemy);
    } else if (action === "c") {
      console.log("see ya later dude!");
    } else if (action === "p") {
      printInventory();
    } else {
      console.log(`oh come on ${name}! come back when you grow a pair! `);
      process.exit();
      console.clear();
    }

    // let fuelLevel = 50;
    //console.log(random);
  } else if (random === 1) {
    driver.weapons.push("Rocket Launcher");
    console.log(`Oh damn son! You just found a Rocket Launcher!`);
  }
}

function downSteepRoad() {
  let random = Math.floor(Math.random() * 4);
  driver.fuelLevel -= 5;
  console.log("Your fuel is at " + driver.fuelLevel);

  if (random === 0) {
    encounter();
  } else {
    console.log(
      "what a lovely day for a drive! Be on the lookout for bad guys!"
    );
  }
}

function cave() {
  let random = Math.floor(Math.random() * 4);
  console.log("Your fuel is at " + driver.fuelLevel);
  driver.fuelLevel -= 5;

  if (random === 2) {
    driver.weapons.push("AR-15");
    console.log(`you picked up an AR-15!`);
  } else if (random === 0) {
    console.log("brrrr its cold in here!");
    encounter();
  } else if (random === 1) {
    console.log("This cave is very scary!");
  }
  const action = readlineSync.keyIn(
    "What would you like to do?: [f] Find someone to fight, [p] print inventory, [c] choose another path, or [q] quit.\n",
    {
      limit: "fcqp"
    }
  );

  if (action === "f") {
    encounter();
  } else if (action === "p") {
    printInventory();
  } else if (action === "q") {
    isAlive = false;
    console.log(`oh come on ${name}! come back when you grow a pair! `);
    process.exit();
    console.clear();
  }
}

function encounter() {
  let random = Math.floor(Math.random() * enemies.length);
  const newEnemy = enemies[random];
  console.log(`Oh no!!! looks like you have encountered ${newEnemy.name}`);
  const action = readlineSync.keyIn(
    "Would you you like to fight [f], or haul your ass out of here? [r], quit [q]\n",
    {
      limit: "frq"
    }
  );
  if (action === "f") {
    // let newEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    attackEnemy(newEnemy);
    fight(newEnemy);
  } else if (action === "r") {
    run();
  } else if (action === "q") {
    isAlive = false;
    driving = false;
    process.exit();
    console.clear();
  }
}

function fight(newEnemy) {
  while (driver.hp > 0 && newEnemy.hp > 0 && !gotAway) {
    let action = readlineSync.keyIn("Do you want to fight [f], or run [r]?", {
      limit: "fri"
    });

    if (action === "f") {
      let newEnemy = enemies[Math.floor(Math.random() * enemies.length)];
      attackEnemy(newEnemy);
      enemyAttack(newEnemy);
    } else if (action === "r") {
      run();
    } else if (action === "i") {
      useItem();
    }
  }
}
if (driver.hp > 0) {
  let newEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  console.log(
    `Well done! ${name}, you destroyed ${newEnemy.name}!, keep it up!`
  );
  enemies.splice(enemies.indexOf(newEnemy), 1);
  console.log(enemies);

  if (enemies.length === 0) {
    console.log(`Well done ${driver.name}!`);
    hasWon = true;
  } else {
    console.log(`${newEnemy.name} kicked your ass!!`);
    isAlive = false;
  }
}

function useItem() {}

function attackEnemy(enemy) {
  let random = Math.floor(Math.random() * driver.ap) + 30;
  enemy.hp -= random;
  console.log(
    `Great job ${driver.name}, you hit ${enemy.name}! their hp is now ${enemy.hp}`
  );
}

function enemyAttack(enemy) {
  let random = Math.floor(Math.random() * enemy.ap);
  driver.hp -= random;
  console.log(`Uh oh!, ${enemy.name} hit you, your hp is now ${driver.hp}`);
}

function run(enemy) {
  let random = Math.floor(Math.random() * 3);
  let newEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  if (random === 2) {
    console.log("You got away!");
    gotAway = true;
  } else if (random === 1) {
    console.log("Get out of here while you can!");
  } else {
    encounter(newEnemy);
  }
}

function printInventory() {
  console.log("Here is your inventory!");
  console.log(driver.weapons);
}
