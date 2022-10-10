
let numberOfArrays = 6; 					// количество массивов
let amountOfElementsInArray = 8; 	// количество элементов в массиве
let max = 7;											// максимальное число в массиве
let min = 0;            					// минимальное число в массиве
const i = 0;
let widthContainer = 0;        // начальная ширина контейнера

let petsContentCardsContainer = document.querySelector('.pets_content__cards-container');
let pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);


// заполнить массив диапазоном случайных чисел, без повторения
function getRandomArray(min, max, amountOfElementsInArray){
	let arr = [];
	let item = '';

	while(arr.length < amountOfElementsInArray){
		item = getRandomArbitrary(min, max);
		if(!arr.includes(item)){
			arr.push(item);
		}

	}

	return arr;
}

// возвращает рандомное число в заданном диапазоне чисел
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


// пушит подмассивы в массив
function getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max){
	let pseudo = [];

	for(let i = 0; i < numberOfArrays; i++){
		pseudo.push(getRandomArray(min, max, amountOfElementsInArray));
	}

	return pseudo;
}


// выше действия с массивами
// ------------------------------------------------------------ //




function clearContainer(){
	petsContentCardsContainer.innerHTML = '';
}


// ------------------------------------------------------------------------
// смотрит ширину контейнера и указыает сколько должно быть подмассивов и по сколько элементов
whatWidthPetsContent();
function whatWidthPetsContent(){

	widthContainer = petsContentCardsContainer.offsetWidth;

	if(widthContainer > 1199){
		numberOfArrays = 6;
		amountOfElementsInArray = 8;
		pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);
		vievPagination(i);
	}

	else if(widthContainer < 1200 && widthContainer > 579){
		numberOfArrays = 8;
		amountOfElementsInArray = 6;

		pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);
		vievPagination(i);
	}

	else if(widthContainer < 579){
		numberOfArrays = 13;
		amountOfElementsInArray = 3;

		pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);
		vievPagination(i);
	}
}


// ----------


// vievPagination(i);
function vievPagination(i){

	clearContainer();
	// console.log(i);
	func2(pseudo[i]);
}

document.addEventListener('click', func77);

function func77(e){
	if(e.target.classList != 'navigation-item') return;

		clearContainer();
		func2(pseudo[e.target.innerHTML - 1]);

		deactivatePagination();
		activatePagination(e);
}



function deactivatePagination(){
	let elems = document.querySelectorAll('[data-pagination]');
	for(let i of elems){
		i.classList.remove('active');
		// i.classList.removeAttribute('data-true');
	}
}

function activatePagination(e){
	if(e.target.dataset.pagination != 'pagination') return;
	e.target.classList.add('active');
	// e.target.setAttribute('data-true', 'true');
}



console.log(1);
function func2(arr){
	for(let i of arr){

		let cards = createDiv('cards');

		let cardsImg = createDiv('cards__img');

		let img = createImg(pets[i].img);


		let cardsContainer = createDiv('cards-container');

		let cardsTitle = createDiv('cards__title');
		cardsTitle.innerHTML = pets[i].name;

		let button = createButton('cards__button');
		button.innerHTML = 'Learn more';

		cardsImg.appendChild(img);

		cardsContainer.appendChild(cardsTitle);
		cardsContainer.appendChild(button);

		cards.appendChild(cardsImg);
		cards.appendChild(cardsContainer);

		petsContentCardsContainer.appendChild(cards);

		// console.log(cards);
	}
}

// генерируем кнопки пагинации
createButtonPagination(numberOfArrays);
function createButtonPagination(numberOfArrays){
	let petsContentNavigation = document.querySelector('.pets_content__navigation');

	let navigationItemRewindPrev = createDiv('navigation-item__rewind-prev');
	navigationItemRewindPrev.innerHTML = '<<';
	let navigationItemRewindNext = createDiv('navigation-item__rewind-next');
	navigationItemRewindNext.innerHTML = '>>';
	let navigationItemPrev = createDiv('navigation-item__prev');
	navigationItemPrev.innerHTML = '<';
	let navigationItemNext = createDiv('navigation-item__next');
	navigationItemNext.innerHTML = '>';

	petsContentNavigation.appendChild(navigationItemRewindPrev);
	petsContentNavigation.appendChild(navigationItemPrev);

	for(let i = 1; i <= numberOfArrays; i++){
		let div = createDiv('navigation-item');
		if(i == 1) div.classList.add('active');
		div.innerHTML = i;
		div.setAttribute('data-pagination', 'pagination');
		petsContentNavigation.appendChild(div);
	}

	petsContentNavigation.appendChild(navigationItemNext);
	petsContentNavigation.appendChild(navigationItemRewindNext);
}

// генерируем активацию стрелок
// createActivationArrow(i);
// function createActivationArrow(i){
// 	console.log(i);
// 	if(i == 1){

// 	}
// }

// переход по стрелкам
document.addEventListener('click', function(e){
	 if(e.target.classList == 'navigation-item__rewind-prev'){
	 		vievPagination(0);
	 		deactivatePagination();
	 		e.target.nextSibling.nextSibling.classList.add('active');
	 		//console.log(e.target.nextSibling.nextSibling);
	 }
	 if(e.target.classList == 'navigation-item__rewind-next'){
	 		vievPagination(numberOfArrays - 1);
	 		deactivatePagination();
	 		e.target.previousSibling.previousSibling.classList.add('active');
	 		//console.log(e.target.nextSibling.nextSibling);
	 		//console.log(e.target.previousSibling.previousSibling);
	 }

	 if(e.target.classList == 'navigation-item__prev'){
	 	let elem = document.querySelector('.active').innerHTML;
	 	let num = elem -1;

	 	// ВОТ ЗДЕСЬ ПЕРЕДАЁТСЯ ПАРАМЕТР
	 	vievPagination(num);


	 }

});



// создаём div
function createDiv(elemClass){

	let div = document.createElement('div');
	div.classList.add(elemClass);

	return div;
}

// создаём img
function createImg(elemSrc){

	let img = document.createElement('img');
	img.src = elemSrc;

	return img;
}

// создаём button
function createButton(elemClass){

	let button = document.createElement('button');
	button.classList.add(elemClass);

	return button;
}


// console.log(petsContentCardsContainer);
