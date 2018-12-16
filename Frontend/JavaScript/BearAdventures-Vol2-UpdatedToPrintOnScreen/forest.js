function Forest() {
    this.mecka = new Bear("Ballue");
    triger = false;
    this.lovec = new Hunter("Robin");
    this.forestLife = [];
    this.carpeDiem = function () {
        
        var aliveAnimals = 0;
        var killedAnimals = 0;
        for (let index = 0; index < this.forestLife.length; index++) {
            if (this.forestLife[index].isAlive) {
                aliveAnimals++;
                
            }
        }
        killedAnimals = 51 - aliveAnimals;
        this.day(!triger);
        if (!this.mecka.isAlive || !aliveAnimals) {
           if(!this.mecka.isAlive)
           { document.writeln("THe yourney is over");
           document.write("<br>")
           this.mecka.isAlive = false;

            triger = false;
        }
         else {
            // this.mecka.isAlive;
            
            document.writeln(this.mecka.name ," survived and killed ", killedAnimals, " animals during this period");
            document.write("<br>")
           }
        return triger;
    }
    }

    this.day = function (triger) {
        if(!triger){
            return true;
        }
        var eat = true;
        if (this.mecka.isAlive) {
            if (calculatePercent(this.lovec.dailyChance)) {
                this.mecka.isAlive = false;
                document.writeln("Lucky SHOT THE HUNTER KILLED THE BEAR");
                document.write("<br>")
                
            }
            if (this.mecka.health > this.mecka.maxHealth) {
                document.writeln("I am way too fat i wont eat today ", this.mecka.health);
                document.write("<br>")
                
                if (calculatePercent(this.lovec.overWeight)) {
                   this.mecka.isAlive = false;
                   document.writeln("The Hunter killed the Bear ");
                   document.write("<br>")
                } else {
                    this.mecka.health -= this.mecka.health * 30 / 100;
                    document.writeln("The Bear escaped the hunter and now has ", this.mecka.health, " health");
                    document.write("<br>")
                    var eat = false; //ako mu izbega na hunterot eat stanuva false i nema da se ispolni uslovot dole za da bara zivotno da jade denta

                }

            }
            if (this.mecka.health < this.mecka.minHealth) {
                this.mecka.isAlive = false;
                document.writeln("Way too weak to walk to hunt i am just gonna take a nap... After a while the Bear is dead");
                document.write("<br>")
            }
        }
            if (eat == true && this.mecka.isAlive) { // ova go napraviv bidejki koga ke mu izbegase na hunterot ziva e i vlagase vo opcija da jade vo istiot den zivotno i mi se polnese pak so energija
                if(calculatePercent(this.mecka.animalKill) == true){
                var victim = this.forestLife[getRandom(0, this.forestLife.length - 1)];
                if (victim.isAlive){
                    if (victim.type == "Herbivore") {
                        this.mecka.kill(victim, this.mecka.dmg);
                        this.mecka.health = this.mecka.health + 180;
                        document.writeln("The Bear Killed ", victim.name, " and now has ", this.mecka.health, " health");
                        document.write("<br>")
                        
                    }
                    if (victim.type == "Rival") {
                        this.mecka.kill(victim, this.mecka.dmg);
                        this.mecka.health = this.mecka.health - 100;
                        document.writeln("The Bear Killed ", victim.name, " and now has ", this.mecka.health, " health");
                        document.write("<br>")
                        
                    }
                     if (victim.type == "Super Meal") {
                        this.mecka.kill(victim, this.mecka.dmg);
                        this.mecka.health = this.mecka.health + 250;
                        document.writeln("The Bear Killed ", victim.name, " and now has ", this.mecka.health, " health");
                        document.write("<br>")
                        
                    }
                }
            }else{ 
                this.mecka.health -= this.mecka.health * 10 / 100;
                document.writeln("Coudent catch anything so whatevar my health now is ",this.mecka.health);
                document.write("<br>")
                document.writeln("")
            }

             
        }
        else {
            return triger;
        }
    }

    this.generateAnimals = function () {
        for (var y = 0; y < 50; y++) {
            var animal = getRandom(1, 6);
            switch (animal) {
                case 1:
                    this.forestLife.push(new Rabbit("Rabbit " + y));
                    break;
                case 2:
                    this.forestLife.push(new Fox("Fox " + y));
                    break;
                case 3:
                    this.forestLife.push(new Wolf("Wolf " + y));
                    break;
                case 4:
                    this.forestLife.push(new Deer("Deer " + y));
                    break;
                case 5:
                    this.forestLife.push(new Bagger("Bagger " + y));
                    break;
                case 6:
                    this.forestLife.push(new Bees("Bees " + y));
                    break;
                default:
                    break;
            }
        }
    }
    this.generateAnimals();
}