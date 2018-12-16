function Stadium(name, fanbase){
    this.name = name;
    this.fanbase = fanbase;
    this.seats = getRandom(40000, 80000);
    this.fansDaily = getRandom(this.seats*60/100, this.seats*80/100);
    this.tikets = this.fansDaily*10;
    this.jersey = this.fansDaily*15/100;
    this.huligans = this.fansDaily*10/100;
    this.earnings = 0;
    this.fanShopProfit = function() {
            console.log("We scored many goals during during 30 days period we sold ", this.jersey, " jersies and ", this.tikets," tikets we made total cash of ");
             this.jersey = this.fansDaily*25/100;
             this.earnings = Math.floor(this.tikets + this.jersey - this.huligans);

    }
    // this.fanShopProfit();
}
Stadium.prototype = new Player();