console.log("Mensaje desde el archivo independiente index.js");



// let nombre = prompt("Cual es tu nombre?");

// let edad = prompt("Cual es tu edad?");

// console.log(nombre);
// console.log(edad);

// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }

// if (nombre == "JESUS") {
//     console.log("Hey Jesus tu eres el mejor");
// }

// edad = Number(edad);
// edad = parseInt(edad);

// switch (edad) {
//     case 11:
//         console.log("Es un niño");
//         break;
//     case 18:
//         console.log("Es un adulto");
//         break;
//     case 60:
//         console.log("Es un adulto mayor");
//         break;

//     default:
//         console.log("No se encontro la edad en nuestro rango");
//         break;
// }


// let persona = {
//     nombre: "Jesus",
//     edad: 23,
//     telefono: "1234567890",
//     direccion: "Calle 123",
//     masculino: true
// };

// console.log(persona);

class Persona {
    constructor(nombre, edad, telefono, direccion, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.direccion = direccion;
        this.genero = genero;
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

let persona1 = new Persona("Maria", 25, "123");
persona1.saludar();


let persona2 = new Persona("Jesus", 27, "321");
persona2.saludar();



