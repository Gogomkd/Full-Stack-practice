// You are a bear in the forest.
// You have to survive the winter for 30 days. 
// You will die if your total mass reaches X amount of kilograms. 
// You will be unable to move for 1 day if your total mass exceeds X kg, 
// during which you lose 20% of your total mass. 
// Each day you have a 30% chance to catch an animal from the forest and eat it. 
// The forest is populated by a fixed number of animals, each with different nutrition value in kg. 
// Some of those fixed animals are wolves. If the caught animal is a wolf, you lose 10% of your mass killing it, 
// but you gain half of its nutrition value (kg/2). 
// After the 20th day, each day there will be a 5% chance for a hunter to come and start hunting you. 
// You lose 30% of your mass when you run away from him, but if you’re overweight, he kills you.
// Will you survive the winter? How many kilograms will be your total mass?


function Forest(bear) {
    var animalCatch = 70;
    var hunterChance = 50;
    var myNextMeal;
    var brojac = 0;

    console.log("The journey begins for ", bear.name, " the winter is long and very very cold");
    console.log(bear.name, " has to survive and keep weight in order to live through the winter");
    console.log("My weight is ", bear.weight, " and if i go bellow ", bear.minWeight, " i will die so dont let me starve");
    console.log("However if my weight is ", bear.maxWeight, " the next day i cant move and i loose 20% of my weight");
    console.log("Let the hunt beggin");

    for (let index = 1; index <= 30; index++) {
        var animalsKilled = 0;
        brojac = index;
        console.log("");
        console.log("Day ", brojac, " for the ", bear.name);


        if (bear.weight < bear.minWeight) {
            index = 30;
            bear.getWeight();

        } else if (bear.weight > bear.maxWeight) {
            index++;
            bear.getWeight();
            console.log("");
            console.log("On this day ", index, " i only spend calories that i got from yesterday and i do nothing");
        } else if (calculatePercent(animalCatch)) {
            bear.getWeight();
            myNextMeal = randomNum(0, 7);
            bear.getFood(forestAnimal[myNextMeal]);

        } else {
            console.log("Today we will eat trash");
            bear.weight -= bear.weight * 10 / 100;
            bear.getWeight();
        }

        if (brojac >= 20 && bear.weight >= bear.minWeight) {
            if (calculatePercent(hunterChance)) {
                var killer = Hunter(bear);
                if (killer) {
                    index = 30;
                }
            }
        }
    }
    if (brojac >= 30) {
        animalsKilled = bear.animalsToEat;
        console.log("");
        console.log("We reached the end of the month");
        console.log("The ", bear.name, "bear has survived, and has a weight of", bear.weight, "kg's and killed ", animalsKilled, " animals during this period");
        console.log("");

    }
    else {
        console.log("");
        console.log("End of the road for our pet");
        console.log("The ", bear.name, "bear has not survived the month, didnt eat enough and has now weight of", bear.weight, "kg's");
        console.log("");
        console.log("");
    }

}

Forest(bears[2]);
Forest(bears[0]);
Forest(bears[1]);
Forest(bears[3]);
Forest(bears[4]);

