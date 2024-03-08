console.log("Mensaje desde el archivo independiente index.js");



let nombre = prompt("Cual es tu nombre?");

let edad = prompt("Cual es tu edad?");

console.log(nombre);
console.log(edad);

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

if (nombre == "JESUS") {
    console.log("Hey Jesus tu eres el mejor");
}

edad = Number(edad);
// edad = parseInt(edad);

switch (edad) {
    case 11:
        console.log("Es un niño");
        break;
    case 18:
        console.log("Es un adulto");
        break;
    case 60:
        console.log("Es un adulto mayor");
        break;

    default:
        console.log("No se encontro la edad en nuestro rango");
        break;
}