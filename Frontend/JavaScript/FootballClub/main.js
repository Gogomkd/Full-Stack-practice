function mainFunction() {
    var club = new FootballClub("Manchester", "Old Traford", 87000);
    console.log("Season has started our club is ", club.name);
    console.log("And the Club has these players ", club.players);
    for (var index = 1; index <= 30; index++) {
        console.log("MatchDay ", index);
        club.playMatch();
        
        console.log("");
        if (index % 5 === 0) {
            club.removeWorstPlayer();
            club.hireStarPlayer();
            var income = 0;
            income = club.stadium.earnings - 50000;
            club.stadium.earnings = income;
            console.log("We payed 50000 for the new player and now have ", income, " funds left");
        }

    }
    club.profit();
    console.log("We made ", income, " cash during 30days period");
}

mainFunction();