import Login from "./login.js";

//Ejercicio 1
const person = {
  name: "Francisco",
  age: 24,
  profession: "Frontend Developer",
}
document.querySelector("#ej1").innerHTML = `[${Object.keys(person)}]`;

//Ejercicio 2
document.querySelector("#ej2").innerHTML = `
    - Puede referirse al contexto global o en este caso la ventana, this = windows.
    - Para hacer referencia a una variable o atributo en un constructor.
`;

//Ejercicio 3
const changeText = str => {
  return str.split('').reverse().join('');
}
document.querySelector("#ej3").innerHTML = `Hola mundo -> ${changeText('Hola mundo')}`;

//Ejercicio 4
const logGood = new Login('admin', 'passwd');
const logBad = new Login("fran", "bad");

document.querySelector("#ej4").innerHTML = `
    User <b>${logGood.username}</b>: ${logGood.login()}
    User <b>${logBad.username}</b>: ${logBad.login()}
`;

//Ejercicio 5
document.querySelector("#loginSuccess").addEventListener('click', function() {
  const log = new Login('admin', 'passwd');
  alert(log.login());
});
document.querySelector("#loginFailure").addEventListener('click', function() {
  const log = new Login('wrong', '123');
  alert(log.login());
});

// Ejercicio 6

document.querySelector("#loginSuccessAsync").addEventListener('click', () => loginWitUsername('admin', 'passwd'));
document.querySelector("#loginFailureAsync").addEventListener('click', () =>  loginWitUsername('wrong', '123'));

const loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 500);
    })
    .then(result => alert(result))
    .catch(err => alert(err));
};
