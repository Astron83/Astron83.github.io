function init() {
	document.querySelectorAll('.school-title').forEach(item => item.addEventListener('click', showDescription));
}

function showDescription(event) {
	const parent = event.target.parentElement;
	parent.classList.toggle('active');
}

window.addEventListener('load', init);

