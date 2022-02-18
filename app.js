/*
@author Gustavo Alberto Valladares Sagrero
*/

//Haciendo referencia al archivo modulo de greet.js
require("./greet");


//Creando una funcion normal y mostrando un mensaje en consola
function greet()
{
    console.log("Hello c:");
}

//Creando una arrow function que ejecute una función que se pasa por parametro
let logGreeting = (parametro) => parametro();


//Pasando por parametro la funcion de greet a la funcion de logGreeting para invocarla
logGreeting(greet);


//Creando una function on the fly que muestre un mensaje en consola.
logGreeting(function(){
    console.log("Hello from a function created on the fly C:");
});


//Interpolation de string clasica
//Creando un arrow function que muestre un mensaje en consola con concatenación tradicional
logGreeting1 = (miNombre, miColor) =>
{
    console.log("Hola " + miNombre + " tu color favorito es " + miColor);
}


//Ejecutando la funcion logGreeting1 para mostrar un mensaje personalizado
logGreeting1("Alberto", "Negro");

//Interpolation de string chida
//Creando una arrow function que muestre un mensaje por consola, concatenando usando template strings
logGreeting2 = (miNombre, miColor, miEdad) =>
{
    console.log(`Hola ${miNombre} tu color favorito es ${miColor} y tienes ${miEdad} años`);
}


//Ejecutando la funcion logGreeting2 para mostrar un mensaje personalizado
logGreeting2("Alberto Sgr", "Negro", "22");