
// modal();
function modal(){

  let cards = document.querySelectorAll('.cards');
  let id = 0;
  let pet = {};


  let elemModal = document.querySelector('.modal');
  let name = document.querySelector('.name');
  let type = document.querySelector('.type');
  let description = document.querySelector('.description');
  let age = document.querySelector('.age');

// propertys
  let inoculations = document.querySelector('.inoculations');
  let diseases = document.querySelector('.diseases');
  let parasites = document.querySelector('.parasites');

  let img = document.querySelector('.pet-img');


  cards.forEach(item => item.addEventListener('click', getIdCard));


  function getIdCard(){
     id = this.dataset.id;
     pet = getPet();

     img.src = pet.img;

     name.innerHTML = pet.name;
     type.innerHTML = pet.breed;
     description.innerHTML = pet.description;
     age.innerHTML = `<span>Age: </span>${pet.age}`;

     inoculations.innerHTML = `<span>Inoculations: </span> ${getProp(pet.inoculations)}`;
     diseases.innerHTML = `<span>Diseases: </span> ${getProp(pet.diseases)}`;
     parasites.innerHTML = `<span>Parasites: </span> ${getProp(pet.parasites)}`;

     toggleClass();
  }

  function getProp(arr){
    text = arr.join();
    return text;
  }


  function getPet(){
    for(let item in pets){
      if(pets[item].id == id){
        pet = pets[item];
      }
    }
    return pet;
  }


  // modal css
  let modalLink = document.querySelector('.a-modal');
  let body = document.querySelector('body');
  let modal = document.querySelector('.modal');

  let header = document.querySelector('.header');

  // console.log(header);

  let close = document.querySelector('.modal__close');


  close.addEventListener('click', function(){
    body.classList.remove('modal-open');
    modal.classList.remove('active');

    header.classList.add('z_index');
  });

  document.addEventListener('click', function(e){
    if(e.target.classList != 'modal__body') return;
    body.classList.remove('modal-open');
    modal.classList.remove('active');

    header.classList.add('z_index');
  });



  function toggleClass(){
    modal.classList.toggle('active');
    body.classList.toggle('modal-open');
    header.classList.toggle('z_index');
  }

}
