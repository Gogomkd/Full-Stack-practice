function mainAction() {
    var fangore = new Forest();
    
    for (var index = 1; index < 30;  index++) {
        console.log("Day ", index);
        var oneDay = true;
        oneDay = fangore.carpeDiem();
        
        if(oneDay == false){
         return;
        }
    }
}

mainAction();