window.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function(percent) {

    var randomN = getRandom(0, 100);
    var brojac;

    if ((100 - percent) <= randomN) {

        brojac = true;
    }
    else { brojac = false; }

    return brojac;
}