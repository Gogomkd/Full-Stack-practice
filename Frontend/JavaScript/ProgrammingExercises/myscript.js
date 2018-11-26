
// Write a JavaScript program that will iterate from 0 to 15. For each iteration,
// it will check if the current number is odd or even, and display a message to the screen (alert or console.log).
// function OddOrEven (){
//     for(var i = 0; i <= 15; i++){
//         if(i % 2 == 0){
//         alert("Brojot e " + i +  " paren");
//     }else{

//         alert("Brojot "  + i +  " neparen");
//     }

// }
// }

// OddOrEven();


// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" 
// instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz". (Print with console.log).

// function multiple(){
//     for (var i = 1; i <= 100; i++){
//         if(!(i % 3) && !(i % 5)){
//             console.log("FizzBuzz" + i);

//         }else if (!(i % 5)){

//            console.log("Buzz" + i);

//         }else if (!(i % 3)){

//             console.log("Fizz" + i );
//         }else {
//             console.log(i);
//         }
//     } 


// }
// multiple();


// Write a JavaScript program to find the armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
// For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

// function armstrong() {
//     for (var i = 100; i <= 999; i++){
//      var zbir = 0;
//      var broj = i;
//      while(broj){
//         //  zbir = zbir +  Math.pow((broj % 10), 3); ova e ista linija so linijata podolu
//          zbir += Math.pow((broj % 10), 3);
//          broj = Math.floor(broj / 10);
//      }
//      if(zbir == i){
//         console.log("Rezultatot e " + zbir);
//      }

// }
// }
// armstrong();

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000

// function newMultiple() {
//     var suma = 0;
//     var broj = 0;
//     for (var i = 1; i <= 1000; i++){
//         broj = i;
//         if (!(broj % 3 ) || !(broj % 5)){
//             suma += broj;
//         }


//     }
//     alert("Zbirot na broevite delivi so 3 i 5 e "+ suma);  
//     return suma;
// }

// newMultiple();

// Write a JavaScript program to get the integers in range (x, y). 
// Input the range as parameters. Print the result as a string.

// function range(x, y){
//   var cifra = 0;

//     for (i = x; i < y; i++){
//         cifra = i.toString();
//         console.log(cifra);
//     }

// }

// range(5, 50);

// Write a JavaScript program that will iterate through a given range of numbers (as function parameters) and sum the numbers. 
// However, if the iteration reaches a prime number, you should skip summing that number, but continue with the loop. 
// A prime number is a number that is divisive only with itself or 1. 
// Print out the sum to console and the number of times you skipped summing a prime number.
// BONUS: Print out the prime numbers you’ve found into a string or array.

// function isPrime(num) {
//     for (var i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//         return true;

//     } 
// }
// ne raazbiram zasto ovaa funkcija za prost broj ne raboti


// function isPrime(value) {
//     for(var i = 2; i < value; i++) {
//         if(value % i === 0) {
//             return false;
//         }
//     }
//     return value > 1;
// }

// function toRange(x, y) {
//     var suma = 0;
//     var cifra = 0;
//     var brojac = 0;
//     for (var i = x; i <= y; i++) {
//         cifra = i;
//         if (isPrime(cifra)) {
//             brojac++;
//         } else {
//             suma += cifra;
//         }
//     }
//     alert("Sumata na site broevi so ne se prosti vo ovoj opseg e " + suma + " a ima vkupno " + brojac + " prosti broevi");
    
// }


// toRange(1, 100);
