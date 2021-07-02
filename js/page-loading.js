'use strict'

var page;

function pageLoad() {
    page = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("preloader").remove();
    document.getElementById("main").style.display = "initial";
}