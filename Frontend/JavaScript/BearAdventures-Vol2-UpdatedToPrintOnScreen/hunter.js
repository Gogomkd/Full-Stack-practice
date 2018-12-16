function Hunter (name){
    this.name = name;
    this.dailyChance = 5;
    this.overWeight = 30;
}

Hunter.prototype = new Animal();