const readLineSync = require("readline-sync");
  
const Character = require("./Character");
const commands = ["w", "walk", "u", "use", "p", "print", "q", "quit", "h", "help"];


class Character {
    constructor()
}



class Truck {
    constructor(make, model, year, airHorn) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.airHorn = airHorn;
    }
}

const semiTruck = new Truck("Freitliner", "Cascadia", 2020, "Bluuuuuuuurp")

Truck.prototype.airHorn = function() {
    console.log("Bluuuuuuuurp!!!")
}
console.log(semiTruck.airHorn)
