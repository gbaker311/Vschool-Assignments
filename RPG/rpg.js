const readline = require('readline-sync')
const name = readline.question("Hello my friend, welcome to the truck drivers mountain driving challenge!! May I please have your name?")

class Driver {
    constructor(name, age, experience, riskTolerance) {
        this.name = name
        this.age = age
        this.experience = experience
        this.riskTolerance = riskTolerance
    }
}
const driver = new Driver(`${name}, 37, 10 years, 100`)

console.log(`Hello, ${name}, ` + `welcome to the craziest truck driving challeng of your life!!! You will be hauling 80 thousand pounds of goods down a snowy mountain road, on your dash you will be given a few alternate routes if you run into trouble. Good luck!`)

const start = readline.question(`Please select yes or no to start [Y] or [N] `, {
    limit: ["Y","N"]
})
if (start === "y") {
    console.log(name + ` is ready to roll!`)
}   else if (start === "n") {
    console.log(name + `oh come on!! ${name}, please come back when you grow a pair`)
    process.exit()
}
let isAlive = true;
let driving = false;

while (isAlive && !driving) {
    const driverChoice = readline.keyIn(` Okay ${driver.name} What route would you like to drive?\n [T] through the big pine trees. \n [C] through the cave. \n [D] down the steep winding road. \n [Q] quit. `,  {limit: [`t`, `c`, `d` ]})
    if (driverChoice === "t") {
        throughTree();
    }   else if (driverChoice === "c") {
        throughCave();
    }   else if (driverChoice === "d") {
        down();
    }   else if (driving === "q") {
        isAlive = false;
        console.log(`Hope to see you again + ${name}, `)
    }
}
function throughTree() {
    driver.riskTolerance =
}
