/* MENU  BURGER */

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menuburger_nav");
let menuItem = document.querySelectorAll(".nav_link");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menuItem.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

/* FOIRE AUX QUESTIONS  */

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}

/* FLECHE BACK TO THE TOP */

// Récupérer le bouton:
let topbtn = document.getElementById("topbtn");

// Lorsque l'utilisateur descend de 20 px à partir du haut du document, afficher le bouton
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

// Lorsque l'utilisateur clique sur le bouton, le document défile jusqu'en haut de la page.
function topFunction() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}
