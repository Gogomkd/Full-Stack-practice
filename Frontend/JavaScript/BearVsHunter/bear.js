function Bear(name, weight) {
    this.name = name;
    this.weight = weight;
    this.minWeight = weight - weight / 2;
    this.maxWeight = randomNum(weight, weight * 1.5);
    this.animalsToEat = 0;

    this.getWeight = function () {
        if (this.weight < this.minWeight) {
            console.log("I am starving.... i lost so much weight and now i am ", this.weight, " and way too weak to do anything i am gonna take a nap. After a while the bear is dead we FAILED ");
        } else if (this.weight > this.maxWeight) {
            console.log("I ate way too much so i am done for today and tomorrow it is tame to sleep");
            this.weight -= this.weight * 20 / 100;
        }
        return this.weight;
    }

    this.getFood = function (ForestAnimals) {
        // if (ForestAnimals.type === "supreme") {
        //     console.log("Live to fight another day ", ForestAnimals.name, " is not a joke i wont eat today ", this.weight);
        // } else 
        if (ForestAnimals.type === "predator") {
            this.weight -= this.weight * 10 / 100;
            this.weight += (ForestAnimals.weight / 2);
            console.log("In days where there is nothing to eat even a ", ForestAnimals.name, " will do the job even if it gives me a fight to eat it ");
            console.log("However it took 10% of my weight to defeat it ");
            console.log("");
            this.animalsToEat += 1;
        } else if (ForestAnimals.type === "pray") {
            this.weight += ForestAnimals.weight * 1.5;
            console.log("Yummy i just found ", ForestAnimals.name, " it tasted ok ", this.weight, " is my current weight");
            this.animalsToEat += 1;
        } else if (ForestAnimals.type === "freshmeat") {
            this.weight += (ForestAnimals.weight + 30);
            console.log("Jackpot i just eat ", ForestAnimals.name, " i just hope my stomack wont blow coz now i weight ", this.weight);
            this.animalsToEat += 1;
        }
    }
}

var Grizzly = new Bear("Grizzly", 500);
var brownBear = new Bear("BrownBear", 400);
var polar = new Bear("Polar", 450);
var blackBear = new Bear("BlackBear", 400);
var ballue = new Bear("Balue", 300);
var bears = [];
bears.push(Grizzly);
bears.push(brownBear);
bears.push(polar);
bears.push(blackBear);
bears.push(ballue);
