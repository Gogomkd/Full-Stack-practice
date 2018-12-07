function War() {
    this.boss = new Dragon("Drogon");
    this.army = [];
    this.isRaging = function () {
        var aliveCombatants = 0;
        for (var index = 0; index < this.army.length; index++) {
            if (this.army[index].isAlive) {
                aliveCombatants++;
            }
        }
        this.processTurn(aliveCombatants);
        if (!this.boss.isAlive || !aliveCombatants) {
            if (!aliveCombatants) {
                console.log(this.boss.name + " has killed all the peasants. His health is " + this.boss.health);

            } else {
                console.log("The dragon has perished at the hands of the peasants");

            }
            return true;
        }
    }
    this.processTurn = function (aliveCombatants) {
        if (!aliveCombatants) {
            return true;
        }
        var victim = this.army[getRandom(0, this.army.length - 1)];

        for (var j = 0; j < this.army.length; j++) {

            if (this.army[j].isShielding) {
                victim = this.army[j];
            } else if (this.army[j].isBuffing) {
                victim = this.army[j];
            }

        }

        if (victim.isAlive) {
            if (victim.isShielding) {
                this.boss.attack(victim, 0);
            } else {
                this.boss.attack(victim, getRandom(this.boss.minDamage, this.boss.maxDamage));
            }



            if (victim.isBuffing) {
                console.log("Dragon is turning his eyes to the " + victim.name + " and is surprised he survived")
                console.log(victim.name + " is using metamorphosis after surviving a strike from " + this.boss.name + " and instantly hits with spell");
                victim.attack(this.boss, getRandom((victim.minDamage + 250), (victim.maxDamage + 350)));

            } if (victim.shouting){
                console.log("The Berserker is regaining his full strenght and now has bigger amount of dmg ");
                this.boss.attack(victim, 0);
                victim.attack(this.boss, getRandom((victim.minDamage + 250), (victim.maxDamage + 350)));
                victim.health = 500;
                console.log(victim.health, " is now the health of ", victim.name);
            }


        } else {
            return this.processTurn();
        }

        for (var index = 0; index < this.army.length; index++) {
            if (this.boss.isAlive && this.army[index].isAlive) {
                this.army[index].attack(this.boss,
                    getRandom(this.army[index].minDamage, this.army[index].maxDamage));
                console.log(this.boss.health , " is now the health of the dragon");
            }

        }
        if (this.boss.specialSkills && this.boss.isAlive) {
            var victim2 = this.army[getRandom(0, this.army.length - 1)];
            for (let i = 0; i < (this.army.length - 1); i++) {
                if (this.army[i].isAlive && this.army[i].isShielding) {
                    break;
                } else {
                    victim2 = this.army[i];
                    console.log(this.boss.name + " Uses FireBreath on the peasants and attacked " + victim2.name);
                    this.boss.attack(victim2, getRandom((this.boss.minDamage - 200), (this.boss.maxDamage - 200)));
                    victim2.isAlive;
                    // console.log(this.army[i].name + " Has "+ this.army[i].health);                }
                }
            }
        }
        
    }
    this.generateArmy = function () {
        for (var index = 0; index < 25; index++) {
            var combatant = getRandom(1, 5);
            switch (combatant) {
                case 1:
                    this.army.push(new Knight("Knight " + index));
                    break;
                case 2:
                    this.army.push(new Wizard("Wizard " + index));
                    break;
                case 3:
                    this.army.push(new Archer("Archer " + index));
                    break;
                case 4:
                    this.army.push(new Priest("Priest " + index));
                case 5:
                    this.army.push(new Berserker("Berserker " + index));
                default:
                    break;
            }
        }
    }
    this.generateArmy();
}