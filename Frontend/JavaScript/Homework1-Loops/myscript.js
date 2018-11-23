// Write a function that accepts two numbers N and X. Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X.
// A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number.
// You are not permitted to use arrays or matrices (we haven’t learned them yet). 
// It’s ok to write subprocedures (helper functions that get called in your main function).

function compare(Broj1, Broj2) {
    //  Broj1 = 0;
    //  Broj2 = 0;
    var value1 = Broj1 % 10;
    var value2 = Broj2 % 10;
    while(value1 != value2){
            Broj1 = value1 % 10;
            value1 = Math.floor(Broj1 / 10);
            Broj2 = value2;
            value2 = Math.floor(Broj2 / 10);
            if(value1 == value2){
                return false;
            }
    }

   return true;
}

function differentNext(N, X){
    var result = N + 1;
    while(compare(result, X)){
        result;
    }
    alert("Najgolemiot pogolem broj od " + N + " koj e razlicen od " + X + " e " + result)
    return result;
}

differentNext(101, 345);
