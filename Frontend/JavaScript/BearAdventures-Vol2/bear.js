function Bear(name) {
this.name = name;
this.health  = 650;
this.dmg = 300;
this.type = "Predator";
this.animalKill = 70;
this.minHealth = 650/2;
this.maxHealth = 650*2;
}

Bear.prototype = new Animal();