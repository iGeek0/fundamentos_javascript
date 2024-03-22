console.log("Mensaje desde el archivo arreglos.js");


const frutas = ['Manzana', 'Plátano', 'Naranja', 'Fresa', 'Zarzamora'];
const numeros = [10, 20, 30 ,40];
const paises = [
    {
        nombre: 'México',
        capital: 'CDMX'
    },
    {
        nombre: 'Colombia',
        capital: 'Bogotá'
    },
    {
        nombre: 'Perú',
        capital: 'Lima'
    }
]

// corchete [] (arreglos)
//  llaves {} (objetos)

for (let index = 0; index < frutas.length; index++) {
    const elementoArreglo = frutas[index];
    console.log(elementoArreglo, 'for');
}

for (const element of frutas) {
    console.log(element, 'for of');
}

frutas.forEach((fruta) =>{
    console.log(fruta, 'forEach');
});

const arregloMapeado = frutas.map((element, index) => {
    return {
        nombre: element,
        posicion: index
    }
});

paises.forEach((pais) => {
    console.log(pais, 'forEach paises');
});

console.log(arregloMapeado);