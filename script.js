let openMenu = document.getElementById("nav-button");
let closeMenu = document.getElementById("nav-button-close");
let navMenu = document.getElementById("nav-dropdown");
let body = document.querySelector("body");



openMenu.addEventListener("click", function() {

  navMenu.style.opacity = "1";
  navMenu.style.animation = "open 1s ease-out";
  openMenu.style.display ="none";
  closeMenu.style.display = "inline-block";
 
  
return;



});




closeMenu.addEventListener("click", function () {

   
    navMenu.style.animation = "close 1.5s ease-out";
    navMenu.style.opacity = "0";
     closeMenu.style.display = "none";
     openMenu.style.display = "block";
     body.style.overflowX = "none";
     
     
   return;
    
 
 
 });


