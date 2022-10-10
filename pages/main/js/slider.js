
document.addEventListener('click', function (e) {
	if (e.target.dataset.randomPets != 'imgRandom') return;
	init();
});


init();
function init() {
	let contentCards = document.querySelector('.pets-content-cards');
	let arrNumbersRandom = getRandomArray(1, 7);
	let petRandom = getPetsRandom(arrNumbersRandom);
	contentCards.innerHTML = '';

	createCards(petRandom, contentCards);
	addAnimation();
}

function createCards(petRandom, contentCards) {
	for (let i of petRandom) {

		let cards = document.createElement('div');
		cards.classList.add('cards');
		cards.dataset.id = i.id;

		let cardsImg = document.createElement('div');
		cardsImg.classList.add('cards__img');

		let img = document.createElement('img');
		img.src = i.img;

		let cardsContainer = document.createElement('div');
		cardsContainer.classList.add('cards-container');

		let cardsTitle = document.createElement('div');
		cardsTitle.classList.add('cards__title');
		cardsTitle.innerHTML = i.name;

		let button = document.createElement('button');
		button.classList.add('cards__button');
		button.innerHTML = 'Learn more';


		cardsImg.appendChild(img);

		cardsContainer.appendChild(cardsTitle);
		cardsContainer.appendChild(button);

		cards.appendChild(cardsImg);
		cards.appendChild(cardsContainer);

		contentCards.appendChild(cards);
	}

	modal();
}

function getPetsRandom(arrNumbersRandom) {
	let arr = [];

	for (let i of arrNumbersRandom) {
		arr.push(pets[i]);
	}
	return arr;
}

// заполнить массив диапазоном случайных чисел, без повторения
function getRandomArray(min, max) {
	let arr = [];
	let item = '';

	while (arr.length < 3) {
		item = getRandomArbitrary(min, max);
		if (!arr.includes(item)) {
			arr.push(item);
		}

	}

	return arr;
}


function getRandomArbitrary(min, max) {
	return Math.round(Math.random() * (max - min) + min);
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
