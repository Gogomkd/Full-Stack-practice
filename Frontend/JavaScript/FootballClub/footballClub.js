function FootballClub(name, stadium, fanbase) {
    this.name = name;
    this.stadium = new Stadium(stadium, fanbase);
    this.numberOfPlayers = 22;
    this.players = [];
    this.playMatch = function () {
        for (var i = 0; i < 22; i++) {
            var pomosna = false;
            if (this.players[i].checkIfScore()) {
                pomosna = true;

            } else {
                pomosna = false;

            }


        }

        return pomosna;
    }
    this.findWorstPlayer = function () {
        var pom = 0;
        var worstPlayer;
        var goals = [];

        for (let k = 0; k < this.players.length; k++) {
            goals.push(this.players[k].goalScored);                                  //put all the goals from players in an array;
        }
        
        pom = Math.min.apply(0, goals);                                         //find the lowest number of goals;    
        worstPlayer = goals.indexOf(pom);                                      //get the index of the player with least goals;
        console.log(goals.toString());
        console.log("The worst player is ", this.players[worstPlayer].name," with ", this.players[worstPlayer].rating, " rating and ",this.players[worstPlayer].goalScored, " goals scored");

            return worstPlayer;
        
    }

    this.removeWorstPlayer = function () {
        
        var worst = this.findWorstPlayer();
        console.log(this.players[worst].name, "is no longer in our team");
        this.players.splice(worst, 1);
        this.numOfPlayers--;
    
    }

    this.hireStarPlayer = function () {
        var player = new Player();
        if (player.rating > 80) {
            this.players.push(player);
            this.numOfPlayers++;
            console.log("We have hired the star "+player.name+ " he has ",player.rating," rating might be a hit");
            console.log("");
        }
        else {
            
            return this.hireStarPlayer();
        }
    }


    this.resetScore = function () {

        for (let y = 0; y < this.players.length; y++) {
            this.players[y].score = false;
        }

    }
    this.profit = function() {
        this.stadium.fanShopProfit();
    }
    this.profit();



    this.generatePlayers = function () {
        for (var index = 0; index < this.numberOfPlayers; index++) {
            this.players.push(new Player(generateName()));
        }
    }
    this.generatePlayers();
}