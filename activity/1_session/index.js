import { ejer1, ejer2, ejer3, ejer4, ejer5 } from './aboutme.js';

// Ejercicio 1

console.log("Ejercicio 1");
console.log(ejer1);
console.log("");

// Ejercicio 2

console.log("Ejercicio 2");
console.log(ejer2);
console.log("");

// Ejercicio 3

console.log("Ejercicio 3");
console.log(ejer3);
console.log("");

// Ejercicio 4

console.log("Ejercicio 4");
ejer4();
console.log("");

// Ejercicio 5

console.log("Ejercicio 5");
console.log(ejer5);
console.log("");

// Ejercicio 6

console.log("Ejercicio 6");
const formatter = {
    prefix: "Hello ",
    append: function(str) {
        return `${this.prefix}${str}`;
    }
};
console.log(formatter.append("World"));