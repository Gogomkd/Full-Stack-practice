function Being() {
    this.isAlive = true;
    this.checkLife = function() {
        if (this.health <= 0) {
            document.writeln(this.name + " has been killed and is dead");
            document.write("<br>")
           
            this.isAlive = false;
        }
    }
}