function classToggle() {
	const navs = document.querySelectorAll('.navbar-items')

	navs.forEach(nav => nav.classList.toggle('navbar-show'));
}

function changeButton(x) {
  x.classList.toggle("change");
}

document.querySelector('.navbar-toggle')
	.addEventListener('click', classToggle);