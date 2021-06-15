let closeBtn = document.querySelector("#close");
let openBtn = document.querySelector("#bars");
let dropDown = document.querySelector(".nav-dropdown");
let header = document.querySelector("#header");
let text = document.querySelector("#header h1");
let sectionAbout = document.querySelector("#about");

function closeMenu () {
    dropDown.style.display ="none";
    openBtn.style.display ="flex";
    closeBtn.style.display ="none";
    dropDown.style.animation = "navAnimationClose 2s ease-out";
     header.style.display="block";
     text.style.paddingTop = "250px";
     sectionAbout.style.display ="flex";
     
   
}











openBtn.addEventListener("click", function () {



    if (dropDown.style.display ="none") {

dropDown.style.display = "block";
openBtn.style.display ="none";
closeBtn.style.display ="flex";
dropDown.style.animation ="navAnimation 1s ease-in";
header.style.display ="none";
sectionAbout.style.display ="none";


    } else {
        dropDown.style.display ="none";
        
        
    }

    
}) ;


    


closeBtn.addEventListener("click", function (){

    closeMenu();
})




















