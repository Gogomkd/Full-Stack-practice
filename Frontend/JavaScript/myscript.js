// Exersise 2
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

// Exersise 3
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

// var Zbor = Zbir(" Sakam ", " Torta ", 22);
// alert(Zbor);

// Ako ima 2 parametara samo ke vrakja sekogas A+B konkatenacija true forma, 
// a ako ima samo eden parametar ke vrakja memorija za nedefiniran parametar undefined i parametarot so e vnesen

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