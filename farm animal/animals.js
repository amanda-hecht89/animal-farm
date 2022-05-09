import { animals } from "../data.js";
import { findById } from "../utils.js";

const param = new URLSearchParams(window.location.search);

const farmAnimal = findById(params.get('id'), animals);

const aniamlName = document.getElementById('animal-name');
aniamlName.textContent = animals.name;
