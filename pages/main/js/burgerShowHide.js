// burger menu
burgerMenu();
function burgerMenu(){


	let burger = document.querySelector('.header__burger');
	let menu = document.querySelector('.menu');
	let body = document.querySelector('body');

	burger.addEventListener('click', function(){
		toggleMenuBurger();
	});

	document.addEventListener('click', function(e){
		 if(e.target.classList.value == 'menu active-burger' ||
		 	e.target.innerHTML == 'About the shelter'){
		 	toggleMenuBurger();
		 }

	});

	function toggleMenuBurger(){
		burger.classList.toggle('active-burger');
		menu.classList.toggle('active-burger');
		body.classList.toggle('modal-open');
	}

}
