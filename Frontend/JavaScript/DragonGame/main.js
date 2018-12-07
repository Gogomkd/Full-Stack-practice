function mainAction() {
    var redWedding = new War();
    var battleEnd = false;
    var counter = 0;
    while (!battleEnd) {
        
        counter++;
        battleEnd = redWedding.isRaging();
        
    }
    console.log("The battle ended after " + counter + " days");
}

mainAction();