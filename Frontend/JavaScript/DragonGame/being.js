function Being() {
    this.isAlive = true;
    this.checkLife = function() {
        if (this.health <= 0) {
            console.log(this.name + " has perished!")
            this.isAlive = false;
        }
    }
}