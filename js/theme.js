'use strict'

function setTheme(name) {
    localStorage.setItem('theme', name);
    document.documentElement.className = name;
}

function changeTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        document.getElementById('switch').checked = true;
    } else {
        setTheme('light');
        document.getElementById('switch').checked = false;
    }
})();