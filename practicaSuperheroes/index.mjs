// Leila Margarita Cura

// import { leerSupeheroes } from "./utils.mjs";

// //Leer y mostrar la lista de superheroes ordenada
// const superheroes = leerSupeheroes('./superheroes.txt');
// console.log('Superheroes ordenados:');
// console.log(superheroes);

import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

// Agregar nuevos superheroes
agregarSuperheroes(archivoOriginal, archivoNuevos);

// Leer y mostrar la lista completa de superheroes ordenada
const superheroesCompleto = leerSuperheroes(archivoOriginal);
console.log('Superhéroes ordenados');
console.log(superheroesCompleto);