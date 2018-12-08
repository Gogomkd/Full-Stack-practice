function Animal() {
    this.kill = function(target, dmg){
        target.getKilled(dmg);
    }
    this.getKilled = function(dmg){
        this.health -= dmg;
        this.checkLife();
    }
}

Animal.prototype = new Being();