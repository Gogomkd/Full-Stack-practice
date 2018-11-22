// function converter(temperature, type) {
//     var result;
//     if (type == "C");
//     {
//         result = teperature*1.8+32;
//     }
//     else if (type === "F")
//     {

//         return = (5/9)*(temperature - 32);
//     } 
//     else {
//         result = "Glup si";
//     }
//     return result;
// }


// function student(casovi, denovi, meseci, duration, holiday)
//  {
//     var total = casovi * denovi * meseci-(duration * holiday);
//     return total;
    
// }

// var predavanja=student(3, 12, 6, 1, 6);
// alert(predavanja);

// function IphonePrice(number, price, type) {
    
//     var tax = (price*5)/100;
//     var tax1 = (price*2)/100;
//     var custom = (price*18)/100;
//     var realPrice;
//     if (type === "A"){
//         realPrice = number *(price + tax1 + custom);
        
//     }else if (type === "IOS"){
//         realPrice = number * (price + tax + custom); 

//     } else {
//         realPrice= number * price;
//     }

//     return realPrice;
// }

// var vrednost = IphonePrice(30, 1000);
// alert(vrednost);



// alert(cash);


// function pari(){
//     var cash=prompt("Imas li pari");
// if (cash >=100) {
//     cash="Moze i ke ti se posrekji";

// } else if (cash < 100){
//    cash="mozda i treba da si ostanes doma";

// }else {
//     cash="Ti si car";
// }
// alert(cash);
// return cash;

// }

// pari()

// function largeOfThree(first, second, third){
//     var broj;
//     if(first>second && first>third){
//         broj=first;
//     }else if(second>first && second>third){
//         broj=second;
//     }else if(third>second && third>first){
//         broj=third;
//     }else {
//         broj="wrong input";
//     }
//     return broj;
// }

// var broevi = largeOfThree(15, 40, 30);
// alert(broevi);


// function Registracija (BhP, O){
//     var vkupno;
//     var TP=5000;
//     if(O=== "Privatno" && BhP<=85){
//         vkupno= TP+7000+3000;
//     } else if(O==="Privatno" && (BhP>85 && BhP<=150)){
//         vkupno=TP+7000+5000;
//     }else if(O==="Privatno" && BhP>150){
//         vkupno=TP+7000+15000;
//     }else if(O==="Kasko" && BhP<=85){
//         vkupno= TP+12000+3000;
//     }else if(O==="Kasko" && (BhP>85 && BhP<=150)){
//         vkupno=TP+12000+5000;
//     }else if(O==="Kasko" && BhP>150){
//         vkupno=TP+12000+15000;
//     }else {
//         vkupno="Wrong Input";
//     }
//     return vkupno;
// }

// var Vozilo = Registracija(125, "Kasko");
// alert(Vozilo);

// Homework 1
// function Zbir(A, B, P ){
//     var result;
//     if(Boolean(P)){
//         result=A+B;
//     }else {
//         result=B+A;
//     }
//     return result;
// }

// var Zbor = Zbir(" Sakam ");
// alert(Zbor);


// function Tax(P, type){
//     var result;
//     var tax=(P*11)/100;
//     var tax1=((P-1000)*18)/100;
//     var tax2=(P*5)/100;
//     var tax3=(P*10)/100;
//     if(type==="Worker" && P<=1000){
//         result=tax;
//     }else if(type==="Worker" && P>1000){
//         result=tax+tax1;
//     }else if(type==="Craftsman" && P<=1000){
//         result=tax2;
//     }else if(type==="Craftsman" && P>1000){
//         result=tax2+tax3;
//     }else {
//         result="Wrong Input";
//     }
//     return result;
// }

// var covek = Tax(1500, "Craftsman");
// alert("Za vasata plata ke platite " +covek+ " evra danok");


// function largestOfValue(){
//     var brojac = 0;
//     var slucaen;
//     var najgolem = 0;
//     while (brojac <= 10){
//         slucaen=Math.floor(Math.random() * 100);
//         brojac++;
//         if(slucaen >= najgolem){
//             najgolem=slucaen;
//         }
//     }
//     return najgolem;
// }

// var NajgolemBroj = largestOfValue();
// alert("Vo ovaa niza najgolem e brojot " + NajgolemBroj);


// function powerOfNumber (){
//     var brojac=0;
//     var suma=0;
//     for(brojac = 101; brojac < 150; brojac++){
//         suma += Math.pow(brojac, 2);
       
//     }
//     return suma;
// }

// var NaKvadrat = powerOfNumber();
// alert("Zbirot na kvadratnite koreni e " + NaKvadrat);


// function zbirNaCifri(){
// var value = prompt("Vnesete broj " );
//     sum = 0;
// var pomosna = value;
// while (value) {
//     sum += value % 10;
//     value = Math.floor(value / 10);
// }

// alert("Zbirot na cifrite na brojot  "+ pomosna + " e " + sum);
// }

// zbirNaCifri();


