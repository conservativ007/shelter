let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');

burger.addEventListener('click', function(){
	burger.classList.toggle('active-burger');
	menu.classList.toggle('active-burger');
});