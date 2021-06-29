'use strict'

var page;

function pageLoad() {
    page = setTimeout(showPage, 2500);
}

function showPage() {
    document.getElementById("preloader").remove();
    document.getElementById("main").style.display = "initial";
}