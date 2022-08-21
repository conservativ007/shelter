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