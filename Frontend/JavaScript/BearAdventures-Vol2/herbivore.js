function Rabbit(name){
    this.health = 100;
    this.name = name;
    this.type = "Herbivore";
    this.dmg = 0;
}

Rabbit.prototype = new Animal();

function Fox(name){
    this.name = name;
    this.health = 220;
    this.type = "Herbivore";
    this.dmg = 0;
}

Fox.prototype = new Animal();

function Bagger(name){
    this.name = name;
    this.type = "Herbivore";
    this.health = 120;
    this.dmg = 0;
}


Bagger.prototype = new Animal();

function Wolf(name){
    this.name = name;
    this.type = "Rival";
    this.health = 280;
    this.dmg = 140;
}

Wolf.prototype = new Animal();

function Deer(name){
    this.name = name;
    this.type = "Super Meal";
    this.health = 280;
    this.dmg = 0;
}

Deer.prototype = new Animal();

function Bees(name){
    this.name = name;
    this.type = "Super Meal";
    this.health = 290;
    this.dmg = 0;

}


Bees.prototype = new Animal();