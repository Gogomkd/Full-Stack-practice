function mainAction() {
    var fangore = new Forest();
    
    for (var index = 1; index < 30;  index++) {
        document.writeln("Day \n", index);
        ;
        var oneDay = true;
        
        oneDay = fangore.carpeDiem(event);
        
        
        if(oneDay == false){
         return;
        }
  
    }

}

// mainAction();