let button = document.getElementById("bars");
let list = document.querySelector("#navbar ul");
let nav = document.getElementById("navbar");
let btnClose = document.getElementById("close");


button.addEventListener("click", function() {

  
nav.style.display = "flex";
nav.style.height = "50vh";
list.style.flexDirection = "column";
list.style.textAlign = "center";
list.style.paddingBottom = "75px";
list.style.marginLeft = "50px";

button.style.display = "none";
btnClose.style.display = "block";
btnClose.style.color = "red";
nav.style.animation ="drop 1s ease-out";

    



})

btnClose.addEventListener("click", function() {

btnClose.style.display = "none";
button.style.display = "block";
nav.style.height = "0vh";
nav.style.animation = "hide 1s ease-in";




})















