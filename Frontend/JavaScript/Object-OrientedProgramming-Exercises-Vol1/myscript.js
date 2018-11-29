function getRandomHit(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBlock(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Soldier(health, rage, min1, max1, min2, max2){
    this.hp = health;
    this.max1 = max1;
    this.min1 = min1;
    this.max2 = max2;
    this.min2 = min2;
    this.getRandomHit = function() {
        return (Math.floor(Math.random() * (this.max1 - this.min1 + 1)) + this.min1);
    };
    
    this.getRandomBlock = function() {
        return (Math.floor(Math.random() * (this.max2 - this.min2 + 1)) + this.min2);
    };
    this.rage = rage;

}

var orc = new Soldier(720, 5, 23, 35, 5, 9);
var footman = new Soldier(550, 0, 18, 27, 9, 15);

function fight(orc, footman) {
    var strike = 1;
    var orcCrit = 0;
   
    var footmanCrit = 0;
    var footmanBlock = 0;
    while(orc.hp > 0 && footman.hp > 0){
        var footmanHit = ((footman.getRandomHit() + footmanCrit) - orc.getRandomBlock());
        var orcHit = ((orc.rage + orcCrit + orc.getRandomHit()) - (footman.getRandomBlock() + footmanBlock));
        console.log("Round " + strike + " starts");
        orc.hp -= footmanHit;
        console.log("The footman did "+footmanHit+ " damage to the orc");
        footman.hp -= orcHit;
        console.log("The orc did "+orcHit+" damage to the Footman");
        console.log("The health of the orc is " + orc.hp + " and the footman has " + footman.hp);
        console.log("");
        strike += 1;
       if (orc.hp <= 0) {
            console.log("For the ALLIANCE " + footman.hp + " hp left. The footman has survived ");
            break;
        } else if (footman.hp <= 0) {
            console.log("LOK TAR OGAR " + orc.hp + " hp left. The orc won the battle ");
            break;
        } else if (footman.hp < 350) {
            footmanBlock = 17;
            orc.rage = 9;
            console.log("Light be with me, give me strenght and give power to this shield " + footmanBlock + " I block now more ");
            console.log("FOR THE HORDE!!! "+ orc.rage +" more damage");
            
            orcCrit = 9;
            footmanCrit = 15;
            console.log("Last Stand for the Human he has critical strike " + footmanCrit + " and the Orc critical strike is " + orcCrit);
            console.log("");
        }
    }
    console.log("The duel is finished");

    }
