import { animals } from '../data.js';
import { findById } from '../utils.js';

const param = new URLSearchParams(window.location.search);

const farmAnimal = findById(param.get('id'), animals);

const animalName = document.getElementById('animal-name');
//animalName.textContent = farmAnimal.name;
console.log('animal js is running');

console.log(farmAnimal);