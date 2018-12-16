function GoalChance() {
    this.score = false;
   
    this.checkIfScore = function (){
        if(calculatePercent(this.rating)) {
            this.score = true;
            this.goalScored += 1;
            console.log("The player ",this.name," has scored a goal and now has ", this.goalScored);
            
            
        }else {
            this.score = false;
        }
        
        return this.score;
    }
    
}