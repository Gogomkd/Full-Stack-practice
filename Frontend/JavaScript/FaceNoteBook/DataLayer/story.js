function Story() {
    this.headder = "header title";
    this.storyDate =  new Date().getTime() - getRandom(1, 5);
    this.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi velit alias iste impedit molestias quos cumque soluta. Atque vero non vel recusandae doloribus odit eaque quidem! Ratione fugit beatae doloribus!"
}

Story.prototype = new Biography();