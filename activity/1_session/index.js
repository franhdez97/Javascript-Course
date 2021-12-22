import { ejer1, ejer2, ejer3, ejer4, ejer5, ejer6 } from './aboutme.js';

// Ejercicio 1

console.log("Ejercicio 1");
document.querySelector("#ejer1").innerHTML=ejer1;
console.log(ejer1);
console.log("");

// Ejercicio 2

console.log("Ejercicio 2");
console.log(ejer2);
document.querySelector("#ejer2").innerHTML=ejer2;
console.log("");

// Ejercicio 3

console.log("Ejercicio 3");
console.log(ejer3);
document.querySelector("#ejer3").innerHTML=ejer3;
console.log("");

// Ejercicio 4

console.log("Ejercicio 4");
ejer4();
console.log("");

// Ejercicio 5

console.log("Ejercicio 5");
console.log(ejer5);
document.querySelector("#ejer5").innerHTML=ejer5;
console.log("");

// Ejercicio 6

console.log("Ejercicio 6");
console.log(ejer6.append("World"));
console.log(ejer6.append("World"));
document.querySelector("#ejer6_1").innerHTML=ejer6.append("World");
//Se añade por prototype
ejer6.__proto__.toLowerString = str => str.toLowerCase();
document.querySelector("#ejer6_2").innerHTML=ejer6.toLowerString("I'm Francisco");