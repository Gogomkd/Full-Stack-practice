function Being() {
    this.isAlive = true;
    this.checkLife = function() {
        if (this.health <= 0) {
            console.log(this.name + " has been killed and is dead");
           
            this.isAlive = false;
        }
    }
}