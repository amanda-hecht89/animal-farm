import { animals } from '../data.js';
import { findById } from '../utils.js';

const param = new URLSearchParams(window.location.search);

const farmAnimal = findById(param.get('id'), animals);


const animalName = document.getElementById('animal-name');
animalName.textContent = farmAnimal.name;

export function () {
    const div = document.createElement('div');
    div.classList.add('');

    const h1 = document.createElement('h1');
    h1.textContent = ;

    const img = document.createElement('img');
    img.src = pets.image;

    const p = document.createElement('p');
    p.textContent = `${pets.name} is ${pets.age} and is a ${pets.breed}`;

    }
    
    div.append(h1, img, p, ul);
    return div;