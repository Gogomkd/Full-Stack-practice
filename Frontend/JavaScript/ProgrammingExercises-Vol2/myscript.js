// An old woman has 3 cats. She has to feed them every day for one week.
// The cats’ names are Tabby, Lizzie and Mary. Tabby likes fish and Lizzy likes chicken. Mary eats anything you give her.
// Help the woman feed her cats by writing a script that will feed them for a week. 
// The actual feeding procedure is: console.log(nameofcat + “ started eating fish/chicken/whatever”);


// function feedCats() {
//     var cats = ["Tabby", "Lizzie", "Mary"];

//     for (var i = 0; i < cats.length; i++) {
//         const cat = cats[i];
//         if (cat == "Tabby") {

//             console.log("Tabby eats Fish" );

//         } else if (cat == "Lizzie") {
//             console.log("Lizzie eats Chiken" );

//         } else if (cat == "Mary") {

//             console.log("Mary eats evrything");

//         } else { console.log("No such cat"); break; }
//     }
// }

// var cat = feedCats();



// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. 
// The whole process lasts one minute. Every second he has to massage the patient's heart (console.log(“performing insertAction”);).
// Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.

// function paramedic() {
//     var timer = 60;
//     for (var i = 0; i < timer; i++) {
//         var sec = i;

//         console.log("Starting CPR");
//         if (sec == 15) {

//             console.log("He is getting warm");
//         } else if (sec == 30) {

//             console.log("Continue with massaging");
//         } else if (sec == timer - 1) {

//             console.log("He is alive");
//             break;
//         }
//     }

//     console.log("Patient is alive");
// }

// paramedic();


// function paramedic (){
//     for(var i = 0; i <= 60; i++) {
//     var time = i;

//     console.log("The patient is bearly moving" );
//     if(!(time % 15)){

//         console.log("The patient is getting alive " + time + "bam bam");
//     }
// }
//     console.log("Keep pushing");
// }

// paramedic();


// Write a script to check whether a number is a palindrome or not. Input the number as a parameter.

// function Palindrome(){
// var numri = window.prompt("Vendosni numrin");
// numri = parseInt(numri);
// while (numri > 9999 || numri < 1000) {
//   alert("Number not 4 digits");
//   var numri = window.prompt("Vendosni numrin");
//   numri = parseInt(numri);
// }
// var shifra4 = numri % 10;
// numri = Math.floor(numri / 10);
// var shifra3 = numri % 10;
// numri = Math.floor(numri / 10);
// var shifra2 = numri % 10;
// var shifra1 = Math.floor(numri / 10);

// if (shifra4 == shifra1 && shifra2 == shifra3)
//   alert("Number palindrome");
// else
//   alert("Number not palindrome");
// }    

// Palindrome();


// function Palindrome(X) {
//    number1 = X;
//    number2 = X;         //se cuva zadadeniot broj za da moze da se proveri so novo dobieniot broj dali e palindrom//
//    var proveri = 0;
//    var palindrom = 0;
//    while (number1){
//        proveri = number1 % 10;
//        palindrom *= 10;
//        palindrom += proveri;
//        number1 = Math.floor(number1 / 10);
//    }
//    if (number2 == palindrom){
//        console.log("Brojot e palindrom");
//    }else {
//        console.log("Brojot ne e palindrom");
//    }
// }

// Palindrome(2552);


// A car uses 7 litres of fuel on 100km.
// How much fuel will the car spend driving 43 kilometers? Use a loop instead of a mathematical formula.

// function fuelConsumation(Kilometars) {
//     var fuel = 0;
//     var km = Kilometars;
//     for (var i = 0; i < 100; i++){

//         fuel += 0.07;

//        }
//        console.log("Kolata ke potrosi " + fuel + " za " + km);
//     }


// fuelConsumation(53);



// A girl tries to impress a boy by flirting with him. Every flirt she makes is worth 1 point, 
// every third flirt is worth 5 points and every 5th flirt is worth 10 points. 
// Every 10th flirt the boy gets tired and deducts the girl’s points by 12.
// Write a function that will calculate if the girl impressed the boy or not,
// by accepting the number of tries the girl should use and the number of hitpoints the boy has, as function parameters.

// function flirt(hitpoints, tries) {
//     var counter = hitpoints;
//     var girl = tries;
//     for (var i = 1; i < girl; i++) {
//         var pom1 = i;
//         var flirt = 1;
//         var girlpoints = flirt;
//         counter -= flirt;
//         if (counter < girlpoints) {
//             console.log("Finally she beat him and they lived happily ever after");
//             break;
//         } else if (!(pom1 % 10)){
//             counter += 13;
//         }else if (!(pom1 % 5)){
//             counter -= (girlpoints += 10);
//         }else if (!(pom1 % 3)){
//             counter -= (girlpoints +=3);
//         } 
//         console.log("Still strong with  " + counter + " HP you need more then " + pom1 + " tries girl");
//     }

// }

// flirt(100, 60);


// An orc warrior is fighting a human footman. 
// The battle ends when one of them dies. 
// The orc has 720 hitpoints, does 23-35 damage and has 5 armor. 
// The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. 
// Shields and armor deduct the damage that the fighter takes. Who will win the fight?

// function getRandomHit(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function fight() {
//     var orc = 720;
//     var footman = 550;
//     var block = 9;
//     var parry = 5;
//     var rage = 0;
//     var hitpoints1 = orc;
//     var hitpoints2 = footman;
//     while (true) {
//         hitpoints1 -= (getRandomHit(18, 27) - parry);
//         hitpoints2 -= (getRandomHit(23, 35) - block - rage);
//         if (hitpoints1 <= 0) {
//             console.log("For the ALLIANCE " + hitpoints2 + " The footman has survived ");
//             break;
//         } else if (hitpoints2 <= 0) {
//             console.log("LOK TAR OGAR " + hitpoints1 + " The orc won the battle ");
//             break;
//         } else if (hitpoints1 < 350) {
//             block = 15;
//             console.log("Light be with me " + hitpoints2 + " I block now more " + block);
//             rage = 2;
//             console.log("Battlecry!! " + hitpoints1 + " I have more power");
//         } else if (hitpoints2 <= 300) {
//             block = 20;
//             console.log("Harderned shell");
//         }
//     }
//     console.log("The duel is finished");
// }

// fight();