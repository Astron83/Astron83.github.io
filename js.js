function init() {
	document.querySelectorAll('.school-title').forEach(item => item.addEventListener('click', showDescription));
	document.querySelectorAll(".menu-element").forEach(item => item.addEventListener("click", scrollToElement));
	
	var swiper = new Swiper('.swiper-container', {
		pagination: {
		  el: '.swiper-pagination',
		  type: 'progressbar',
		},
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });
}

function showDescription(event) {
	const parent = event.target.parentElement;
	parent.classList.toggle('active');
}
function scrollToElement(event) {
    const element = document.querySelector('#'+event.target.dataset.name);
    if (!element) return;
    element.scrollIntoView({ 
    behavior: 'smooth',
});
}
window.addEventListener('load', init);