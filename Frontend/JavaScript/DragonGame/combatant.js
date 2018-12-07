function Combatant() {
    this.attack = function (target, damage) {
        console.log(this.name + " has attacked " + target.name + " for " + damage + " damage")

        target.receiveDamage(damage);
    }
    this.receiveDamage = function (damage) {
        this.health -= damage;
        this.checkLife();
        var chance = 15;
        if (this.isAlive && this.type == "dragon" && this.health < 22500) {

            if (calculatePercent(chance)) {
                this.specialSkills = new DragonAbilities();
            }
        }

        if (this.isAlive && this.type == "knight" && damage > 0) {
            console.log(this.name + " is shielding");
            this.isShielding = true;
        } else {
            this.isShielding = false;
        }
        if (this.isAlive && this.type == "wizard" && this.health > 0) {

            this.isBuffing = true;
        } else {
            this.isBuffing = false;
        }
        if (this.isAlive && this.type == "archer") {
            console.log(this.name + " has stunned the Dragon");
            this.longBow = true;
        } else {
            this.longBow = false;
        }
        if (this.isAlive && this.type == "berserker" && this.health > 0) {
            this.shouting = true;
        } else { this.shouting = false; }
    }
}

Combatant.prototype = new Being();