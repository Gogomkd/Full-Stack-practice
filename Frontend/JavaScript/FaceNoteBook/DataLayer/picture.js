function Picture(name) {
    this.picture = name;
   this.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et expedita quo, nulla iste qui quibusdam aut illo assumenda quos repellat quia dolore mollitia, asperiores nam quidem error repellendus sunt accusantium.";
   this.imageForFace = getRandom(1, 6);
    switch(this.imageForFace){
        case 1:
        this.link = "img/silvanas.png";
        break;
        case 2:
        this.link = "img/voljin.png";
        break;
        case 3:
        this.link = "img/vladimir.png";
        break;
        case 4:
        this.link = "img/nightking.png";
        break;
        case 5:
        this.link = "img/drogon.png";
        break;
        case 6:
        this.link = "img/trall.png";
        break;
      
    }
}
