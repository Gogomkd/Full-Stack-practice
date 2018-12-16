//Random function 
window.getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//
// Percent Calculator
window.calculatePercent = function(percent) {

    var randomN = getRandom(0, 100);
    var brojac;

    if ((100 - percent) <= randomN) {

        brojac = true;
    }
    else { brojac = false; }

    return brojac;
}
//
// Random name generator
function capFirst(string) {
    return string.charAt(0) + string.slice(1);
}

function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(){
    var name1 = ["Elijah","Oliver","Grayson","Logan","Alexander","Caleb","Nathan","Grayson","Ryan","Luke","Cameron","Sebastian","Brayden","John","Lincoln","Cameron","Sanchez","Cook","Cameron","Andrew","Levi","Isaiah","Christian","David","Landon","Eli","Jayce","Gabriel","Owen","Isaac","Jayce","Muhammad","Henry"];
    
    var name2 = ["JOHNSON","WILLIAMS","JONES","TAYLOR","ANDERSON","MOORE","THOMPSON","HARRIS","THOMAS","LEWIS","LEE","WALKER","YOUNG","WRIGHT","SANCHEZ","MORRIS","ROGERS","REED","RIVERA","COOK","BAILEY","RAMIREZ","KELLY","PRICE","JENKINS","POWELL","LONG","FLORES","WASHINGTON","GONZALES","RUSSELL","HAMILTON","SULLIVAN","WALLACE","COLE"];
	var name = capFirst(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length - 1)]);
	return name;

}

//