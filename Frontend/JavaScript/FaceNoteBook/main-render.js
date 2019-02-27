function PageRenderer(data) {
    this.userData = data
    this.renderAll = function (data) {
        var mainContainer = document.getElementById("mainContainer");
        mainContainer.style.display = "flex";
        mainContainer.style.position = "relative";
        mainContainer.style.justifyContent = "center";
        mainContainer.style.alignItems = "center";
        mainContainer.appendChild(this.renderLeft());
        mainContainer.appendChild(this.renderRight());
    }

    this.renderLeft = function () {
        var leftContainer = document.createElement("div");
        leftContainer.style.width = "35%";
        leftContainer.style.display = "flex";
        leftContainer.style.alignSelf = "flex-start";
        leftContainer.style.flexDirection = "column";

        var profileContainer = document.createElement("div");
        var profileImage = document.createElement("img");
        profileImage.style.width = "400px";
        profileImage.style.height = "400px";
        profileImage.src = this.userData.profilePicture.link;
        profileContainer.appendChild(profileImage);

        var aboutMeContainer = document.createElement("div");
        var aboutHeader = document.createElement("h1");
        aboutHeader.innerHTML = this.userData.biography.header;
        var aboutText = document.createElement("p");
        aboutText.innerHTML = this.userData.biography.paragraph;

        aboutMeContainer.appendChild(aboutHeader);
        aboutMeContainer.appendChild(aboutText);

        leftContainer.appendChild(profileContainer);
        leftContainer.appendChild(aboutMeContainer);

        return leftContainer;
    }

    this.renderRight = function () {

        var rightContainer = document.createElement("div");
        rightContainer.style.width = "65%";
        rightContainer.style.display = "flex";
        rightContainer.style.flexDirection = "column";
        rightContainer.style.alignItems = "center";
        rightContainer.style.justifyContent = "center";

        var rightUpper = document.createElement("div");
        rightUpper.style.display = "flex";
        rightUpper.style.flexDirection = "row";
        rightUpper.style.flexWrap = "wrap"

        rightContainer.appendChild(rightUpper);

        for (var index = 0; index < this.userData.album.length; index++) {

            var rightPictures = document.createElement("div");
            rightPictures.style.width = "30%";
            rightPictures.style.height = "20%";
            var pictures = document.createElement("img");
            pictures.id = index;
            pictures.src = this.userData.album[index].link;
            console.log(this.userData.album[index].link);
            pictures.out = this.userData.album[index].text;
            pictures.style.width = "90%";
            var that = this;
            pictures.addEventListener("click", function (event) {
                var newDiv = document.createElement("div");
                newDiv.style.height = "550px";
                newDiv.style.width = "550px";
                newDiv.style.marginRight = "0";
                newDiv.style.marginLeft = "0";

                newDiv.style.position = "absolute";
                newDiv.style.display = "flex";
              
                
                var macka = document.createElement("img");
                macka.src = that.userData.album[event.target.id].link;
                newDiv.id = event.target.id;
                macka.style.height = "100%";
                macka.style.width = "100%";
                macka.style.objectFit = "contain";
                
                var leftArrowDiv = document.createElement("div");
                leftArrowDiv.style.width = "100px";
                leftArrowDiv.style.height = "100px";
                // leftArrowDiv.style.marginRight = "20px";
                leftArrowDiv.style.alignSelf = "center";
                var leftArrow = document.createElement("img");
                leftArrow.style.height = "50px";
                leftArrow.style.width = "50px";
                leftArrow.src = "levo.png";
                leftArrow.style.alignSelf = "center";
          
                
                leftArrowDiv.addEventListener("click", function () {
                    macka.src = that.userData.album[newDiv.id--].link;
                    if (newDiv.id < 0) {
                       
                        return newDiv.id = that.userData.album.length - 1; 
                        
                    }
                    console.log("left", newDiv.id);
                    return macka.src;
                })
                var rightArrowDiv = document.createElement("div");
                rightArrowDiv.style.display = "flex";
                
                rightArrowDiv.style.alignSelf = "center";
                // rightArrowDiv.style.marginTop = "5px";
                rightArrowDiv.style.marginLeft = "20px";
                rightArrowDiv.style.width = "100px";
                rightArrowDiv.style.height = "100px";
                var rightArrow = document.createElement("img");
                rightArrow.src = "desno.png";
                rightArrow.style.height = "50px";
                rightArrow.style.width = "50px";
                rightArrowDiv.addEventListener("click", function(){
                    macka.src = that.userData.album[newDiv.id++].link;
                    lastImg = that.userData.album.length - 1;
                    if (newDiv.id > lastImg) {
                       
                        return newDiv.id = 0;
                        
                    }
                    console.log("Right", newDiv.id);
                    return macka.src;
                })
             
                leftArrowDiv.appendChild(leftArrow);
                newDiv.appendChild(leftArrowDiv);
                newDiv.appendChild(macka);
                rightArrowDiv.appendChild(rightArrow);
                newDiv.appendChild(rightArrowDiv);
                rightContainer.appendChild(newDiv);
            })

            rightContainer.appendChild(rightUpper);
            rightUpper.appendChild(rightPictures);
            rightPictures.appendChild(pictures);
        }


        var rightLower = document.createElement("div");
        rightLower.style.width = "100%";
        rightLower.style.display = "flex";
        rightLower.style.flexDirection = "column";

        var rightLowerElement = document.createElement("div");
        rightLowerElement.style.width = "80%";
       
        for (var index2 = 0; index2 < this.userData.stories.length; index2++) {
            var story = document.createElement("div");

            story.style.width = "100%";
            story.style.height = "200px";
            story.style.display = "flex";
            story.style.flexDirection = "column";
            var naslov = document.createElement("h1")
            var data = document.createElement("span")
            var storyText = document.createElement("p");
            story.id = index2;
            naslov.innerHTML = this.userData.stories[index2].headder;
            data.innerHTML = this.userData.stories[index2].storyDate;
            storyText.innerHTML = this.userData.stories[index2].text;
            story.appendChild(naslov);
            story.appendChild(storyText);
            story.appendChild(data);
            rightLowerElement.appendChild(story);

            var button = document.createElement("button");
            button.style.display = "flex";
            button.style.justifyContent = "center";
            button.style.alignContent = "center";
            button.innerHTML = "Delete";

            button.addEventListener("click", function (event) {
                var element = document.getElementById(event.target.parentNode.id); //event kade na klick ke go izbrise divot i toa samo edniot kade sto e kopceto.
                element.parentNode.removeChild(element);
            })
            story.appendChild(button);
        }
        rightContainer.appendChild(rightLower);
        rightLower.appendChild(rightLowerElement);


        return rightContainer;
    }

}