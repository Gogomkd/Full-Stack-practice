document.getElementById("sample-button").addEventListener("dblclick", function() {
    console.log("double");
})

function createP (){
var sampleDiv = document.createElement("p");
sampleDiv.innerHTML = "Some text asdasdasdasdasdasdasdas";
var body = document.getElementsByTagName("body")[0];
body.appendChild(sampleDiv);
sampleDiv.addEventListener("click", function(event){
    event.target.style.color = "red";
})
var kopce = document.createElement("button");
kopce.id = "button";
kopce.innerHTML = "Click Me ";
document.getElementsByTagName("body")[0].appendChild(kopce);
kopce.addEventListener("mouseout", function(event){
    event.target.style.color = "blue";
})
}

createP();


