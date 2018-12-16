function Player() {
    this.name = generateName();
    this.rating = getRandom(0,90);
    this.goalScored = 0;
    
}

Player.prototype = new GoalChance();