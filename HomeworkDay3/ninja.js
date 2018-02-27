function Ninja(name) {
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3; 
this.sayName = function() {
    console.log("Hello my name is " + this.name + "");
}
this.showStats = function() {
    console.log("Name: " + this.name + " Health: " + this.health + " Speed: " + speed + " Strength: " + strength + ".");
}
this.drinkSake = function() {
    this.health += 10;
}
}

Ninja.prototype.punch = function(ninja) {
    console.log (ninja.name + " was punched by " + this.name + " and lost 5 health was lost.");
    ninja.health -=5;
}
Ninja.prototype.kick = function(ninja) {
    console.log (ninja.name + " was kicked by " + this.name + " and lost 15 health was lost.");
    ninja.health -=15;
}

const ninja1 = new Ninja("Sam");
const blueNinja = new Ninja ("Goemon");
const redNinja = new Ninja ("Bill Gates");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
blueNinja.sayName();
redNinja.sayName();
blueNinja.showStats();
redNinja.showStats();
redNinja.punch(blueNinja);
blueNinja.showStats();
blueNinja.kick(redNinja);
redNinja.showStats();