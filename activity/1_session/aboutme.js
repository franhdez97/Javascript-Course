const nombre = "Francisco Hernández";
const profesion = "Programador";
const puesto = "Frontend developer";

//Ejercicio 1
export const ejer1 = `Hola, me llamo ${nombre} y soy ${profesion}. Trabajo en una buena empresa como ${puesto}.`;

//Ejercicio 2
export const ejer2 = "Se ejecuta primero el contenido del fichero aboutme, por la importación de código."

//Ejercicio 3
export const ejer3 = "Application, lighthouse y sources."

//Ejercicio 4
export const ejer4 = () => {
    const element = document.querySelector("#ejer4");
    for(let i = 1; i <= 100; i++) {
        if(i % 7 == 0) {
            element.innerHTML += `${i}, `;
            console.log(i);
        }
    }
}

//Ejercicio 5
export const ejer5 = "El atributo MODULE permite ejecutar código javascript de manera estricta, ya que por defecto esta desactivado.";

//Ejercicio 6
export const ejer6 = {
    prefix: "Hello ",
    append: function(str) {
        return `${this.prefix}${str}`;
    }
};