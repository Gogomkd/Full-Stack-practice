// Write a function that accepts two numbers N and X. Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X.
// A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number.
// You are not permitted to use arrays or matrices (we haven’t learned them yet). 
// It’s ok to write subprocedures (helper functions that get called in your main function).

function compare(Number1, Number2) {
    var cifra1 = 0;
    var cifra2 = 0;
    var brojac;

    while (Number1 && Number2) {
        cifra1 = Number1 % 10;
        Number1 = Math.floor(Number1 / 10); //go deli prviot broj po cifri i value1 prima vrednost na poslednata cifra na Broj1 od desno//

        cifra2 = Number2 % 10;
        Number2 = Math.floor(Number2 / 10); // go deli vtoriot broj po cifri i value2 piima vrednost na poslednata cifra od Broj2 od desno//

        if (cifra1 == cifra2) {

            brojac = true;
            break;

        } else {
            brojac = false;
        }

    }
    return brojac;
}

function differentNext(N, X) {
    var number1 = N + 1;
    
    while (true) {

        if (compare(number1,X)) {
            number1++;
        } else { break; }
    }
   console.log("Najgolemiot pogolem broj od " + N + " koj e razlicen od " + X + " e " + number1);
    
}

differentNext(104, 345);