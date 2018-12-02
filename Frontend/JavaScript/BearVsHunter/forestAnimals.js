function ForestAnimals(name, weight, type) {
    this.name = name;
    this.weight = weight;
    this.type = type;
}


var rabbit = new ForestAnimals("Rabbit", 90, "freshmeat");
var bees = new ForestAnimals("Honey", 90, "freshmeat");
var boar = new ForestAnimals("WildBoar", 90, "pray");
var deer = new ForestAnimals("Unicorn", 200, "freshmeat");
var fox = new ForestAnimals("Fox", 80, "pray");
var wolf = new ForestAnimals("Wolf", 170, "predator");
var hiena = new ForestAnimals("Hienna", 80, "pray");
var wolfPack = new ForestAnimals("WolfPack", 200, "supreme");
var RivalBear = new ForestAnimals("RivalBear", 600, "supreme");



var forestAnimal = [];
forestAnimal.push(rabbit);
forestAnimal.push(bees);
forestAnimal.push(boar);
forestAnimal.push(deer);
forestAnimal.push(fox);
forestAnimal.push(wolf);
forestAnimal.push(hiena);
forestAnimal.push(wolfPack);
forestAnimal.push(RivalBear);