let navList = document.querySelector('.header__nav-list');
let navIcon = document.querySelector('.header__nav-icon');
let body = document.querySelector('body');
navIcon.addEventListener('click', function(){
	navList.classList.toggle('_active');
	this.classList.toggle('_active');
	body.classList.toggle('lock');
});

$(document).ready(function(){
	$('.slider__content').slick({
		arrows: false,
		dots: true
	});
	$('.team__slider').slick({
		arrows: true,
		dots: true
	});
});