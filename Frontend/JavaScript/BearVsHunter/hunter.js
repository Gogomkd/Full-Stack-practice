function Hunter(bear) {
    var brojac;
    if (bear.weight >= bear.maxWeight) {
        brojac = true;
        console.log("The Hunter has killed the " + bear.name);

    }
    else {
        var weightAfter = bear.weight;
        bear.weight -= bear.weight * 10 / 100;
        brojac = false;
        console.log("The " + bear.name + " have escaped the hunter but also lost", (weightAfter -= bear.weight), "kg's");

    }
    return brojac;
}
