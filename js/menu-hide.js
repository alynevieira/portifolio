'use strict'

var prevScrollpos = window.pageYOffset;

function hideNavbar() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
      navbar.setAttribute("class", "navbar--show");

      if (currentScrollPos === 0) {
        navbar.removeAttribute("class", "navbar--show");
      }
    } else {
      document.getElementById("navbar").style.top = "-110px";
    }
  
    prevScrollpos = currentScrollPos;
}

window.onscroll = function() {
  hideNavbar();
};