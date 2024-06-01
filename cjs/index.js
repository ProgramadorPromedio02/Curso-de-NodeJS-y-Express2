// console.log('Hola, munda 👋');
// console.info('Hola, mundo 👋');
// console.error('Hola, error 😡');

// // typeof: es un operador que se utiliza para determinar el tipo de una variable o expresión. Devuelve una cadena que indica el tipo del valor: "undefined", "object", "boolean", "number", "bigint", "string", "symbol", o "function".

// // console.log(window); // window IS NOT DEFINED
// console.log(typeof window); // window IS UNDEFINED

// // globalThis: es un objeto global que proporciona una manera estándar de acceder al objeto global en diferentes entornos (navegador, Node.js, etc.). En un navegador, es equivalente a window; en Node.js, es equivalente a global.

// console.log(globalThis);

// // console.log() no es una variable global, sino una propiedad de la variable global globalThis.

// // console.log("Hola, mundo!"); // Equivalente a globalThis.console.log("Hola, mundo!"); y global.console.log("Hola, mundo!");

// 

// CommonJS require module
const sum = require('./sum.js');

console.log(sum(1, 2));

// CommonJS require module
const sum = require('./sum.js');

console.log(sum(1, 2));
