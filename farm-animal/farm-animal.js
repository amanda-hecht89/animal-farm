import { animals } from '../data.js';
import { findById } from '../utils.js';

const param = new URLSearchParams(window.location.search);

const farmAnimal = findById(param.get('id'), animals);

const image = document.getElementById('img');
const paragraph = document.getElementById('para');
const animalName = document.getElementById('animal-name');
animalName.textContent = farmAnimal.name;

image.src = `../assets/${farmAnimal.type}.svg`;
paragraph.textContent = farmAnimal.says;

    //const div = document.createElement('div');
 //   div.classList.add('');

   // const img = document.createElement('img');
    //img.src = `../assets/${farmAnimal.type}.svg`;

  //  const p = document.createElement('p');
   // p.textContent = `${farmAnimal.name} is a ${farmAnimal.type} and says ${farmAnimal.says}`;
   // div.append(img, p,);


    