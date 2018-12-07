function Knight(name) {
    this.health = 1200;
    this.minDamage = 50;
    this.maxDamage = 75;
    this.name = name;
    this.type = "knight";
    this.protectArmy = function() {

    }
}
Knight.prototype = new Combatant();

function Wizard(name) {
    this.health = 800;
    this.minDamage = 100;
    this.maxDamage = 240;
    this.name = name;
    this.type = "wizard";
    this.buffAllies = function() {
        
    }
}
Wizard.prototype = new Combatant();

function Archer(name) {
    this.name = name;
    this.health = 450;
    this.minDamage = 80;
    this.maxDamage = 150;
    this.type = "archer";
}
Archer.prototype = new Combatant();


function Priest(name){
    this.name = name;
    this.health = 450;
    this.minDamage = 50;
    this.maxDamage = 70;
    this.type = "priest";
    this.heal = function() {

    }
}

Priest.prototype = new Combatant();

function Berserker(name){
    this.name = name;
    this.health = 900;
    this.minDamage = 100;
    this.maxDamage = 200;
    this.type = "berserker";
    this.battleCry = function() {
        
    }
}

Berserker.prototype = new Combatant();
