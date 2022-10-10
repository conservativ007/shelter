let numberOfArrays = 6; 					// количество массивов
let amountOfElementsInArray = 8; 	// количество элементов в массиве
let max = 7;											// максимальное число в массиве
let min = 0;            					// минимальное число в массиве
let i = 0;
let widthContainer = document.querySelector('.pets_content__cards-container').offsetWidth;       // начальная ширина контейнера
let navigationNumberValue = 1;

let navigationNumber = createDiv('navigation-item__value');

let navigationItemRewindNext = '';
let navigationItemRewindPrev = '';
let navigationItemPrev = '';
let navigationItemNext = '';


let petsContentCardsContainer = document.querySelector('.pets_content__cards-container');
let pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);

// ----------------------------------------------------------------- //
// таймер, чтобы вручную не обновлять страницу при изменении ширины контейнера, для загрузки псеУдо массивов

setInterval(func1, 100);

// сменить название функции
function func1() {

	if (widthContainer != document.querySelector('.pets_content__cards-container').offsetWidth) {
		console.log('смена разрешения!');
		widthContainer = document.querySelector('.pets_content__cards-container').offsetWidth;
		clearContainer();
		i = 0;
		navigationNumber.innerHTML = i + 1;
		whatWidthPetsContent();
		addClassActive();
		removeClassActive();
	}
}

// ------------------------------------------------------------------------
// смотрит ширину контейнера и указыает сколько должно быть подмассивов и по сколько элементов
whatWidthPetsContent();
function whatWidthPetsContent() {

	widthContainer = petsContentCardsContainer.offsetWidth;

	if (widthContainer > 1199) {
		numberOfArrays = 6;
		amountOfElementsInArray = 8;
		pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);
		vievPagination(i);
	}

	else if (widthContainer < 1200 && widthContainer > 579) {
		numberOfArrays = 8;
		amountOfElementsInArray = 6;

		pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);
		vievPagination(i);
	}

	else if (widthContainer < 579) {
		numberOfArrays = 16;
		amountOfElementsInArray = 3;

		pseudo = getPseudoRandomArray(numberOfArrays, amountOfElementsInArray, min, max);
		vievPagination(i);
	}
}

// --------------------------------

// создание элементов
// создаём div
function createDiv(elemClass) {

	let div = document.createElement('div');
	div.classList.add(elemClass);

	return div;
}

// создаём img
function createImg(elemSrc) {

	let img = document.createElement('img');
	img.src = elemSrc;

	return img;
}

// создаём button
function createButton(elemClass) {

	let button = document.createElement('button');
	button.classList.add(elemClass);

	return button;
}

// --------------------------------------- //
// очистка контейнера
function clearContainer() {
	petsContentCardsContainer.innerHTML = '';
}


// ---------------------------------------- //
// создание карточек
function vievPagination(i) {
	// сменить название функции
	func2(pseudo[i]);
}




function func2(arr) {
	for (let i of arr) {
		// console.log(pets)
		let cards = createDiv('cards');
		cards.dataset.id = pets[i].id;

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
	}
	modal();
}

// -------------------------------------------------------------------//
// добаввление анимации
function addAnimation() {
	let cards = document.querySelectorAll('.cards');

	toggleClass(cards);
	setTimeout(toggleClass, 300, cards);
	console.log(cards);
}

function toggleClass(items) {
	items.forEach(i => i.classList.toggle('animate2'));
}


// ------------------------------------------------------ //
// генерируем кнопки пагинации
createButtonPagination(numberOfArrays);
function createButtonPagination(numberOfArrays) {
	let petsContentNavigation = document.querySelector('.pets_content__navigation');

	navigationItemRewindPrev = createDiv('navigation-item__rewind-prev');
	navigationItemRewindPrev.innerHTML = '<<';
	navigationItemRewindPrev.setAttribute('data-nav', 'rewind-prev');
	navigationItemRewindPrev.classList.add('nav');


	navigationItemRewindNext = createDiv('navigation-item__rewind-next');
	navigationItemRewindNext.innerHTML = '>>';
	navigationItemRewindNext.setAttribute('data-nav', 'rewind-next');
	navigationItemRewindNext.classList.add('nav');

	navigationItemPrev = createDiv('navigation-item__prev');
	navigationItemPrev.innerHTML = '<';
	navigationItemPrev.setAttribute('data-nav', 'item__prev');
	navigationItemPrev.classList.add('nav');

	navigationItemNext = createDiv('navigation-item__next');
	navigationItemNext.innerHTML = '>';
	navigationItemNext.setAttribute('data-nav', 'item__next');
	navigationItemNext.classList.add('nav');

	navigationNumber.innerHTML = navigationNumberValue;
	navigationNumber.classList.add('active');
	navigationNumber.classList.add('nav');


	petsContentNavigation.appendChild(navigationItemRewindPrev);
	petsContentNavigation.appendChild(navigationItemPrev);


	petsContentNavigation.appendChild(navigationNumber);

	petsContentNavigation.appendChild(navigationItemNext);
	petsContentNavigation.appendChild(navigationItemRewindNext);
}

// --------------------------------------------------------------- //
// переход по кнопкам
document.addEventListener('click', navigation);

function navigation(e) {
	// console.log(e.target.dataset.nav);
	if (e.target.dataset.nav == 'item__next') next();
	if (e.target.dataset.nav == 'item__prev') prev();
	if (e.target.dataset.nav == 'rewind-next') fullSpeedAhead();
	if (e.target.dataset.nav == 'rewind-prev') fullBack();
}

function next() {
	if (i + 1 == numberOfArrays) return;
	i++;
	clearContainer();
	vievPagination(i);
	navigationNumber.innerHTML = i + 1;
	addClassActive();
	removeClassActive();
	addAnimation();
}

function prev() {
	if (i == 0) return;
	i--;
	clearContainer();
	vievPagination(i);
	navigationNumber.innerHTML = i + 1;
	addClassActive();
	removeClassActive();
	addAnimation();
}

function fullSpeedAhead() {
	if (i + 1 == numberOfArrays) return;
	i = numberOfArrays - 1;
	clearContainer();
	vievPagination(i);
	navigationNumber.innerHTML = numberOfArrays;
	addClassActive();
	removeClassActive();
	addAnimation();
}

function fullBack() {
	if (i == 0) return;
	i = 0;
	clearContainer();
	vievPagination(i);
	navigationNumber.innerHTML = 1;
	addClassActive();
	removeClassActive();
	addAnimation();
}


// ------------------------------------------------------------------- //
// добавление класса active

addClassActive();
function addClassActive() {
	if (i != numberOfArrays - 1) {
		navigationItemRewindNext.classList.add('active');
		navigationItemNext.classList.add('active');
	}

	if (i > 0) {
		navigationItemRewindPrev.classList.add('active');
		navigationItemPrev.classList.add('active');
	}
}

// ------------------------------------------------------------------- //
// удаление класса active

removeClassActive();
function removeClassActive() {
	if (i == numberOfArrays - 1) {
		navigationItemRewindNext.classList.remove('active');
		navigationItemNext.classList.remove('active');
	}

	if (i == 0) {
		navigationItemRewindPrev.classList.remove('active');
		navigationItemPrev.classList.remove('active');
	}
}
