'use strict'

var page;

function pageLoad() {
    page = setTimeout(showPage, 2500);
}

function showPage() {
    document.getElementById("preloader").remove();
    document.getElementById("first-landing").style.display = "flex";
}