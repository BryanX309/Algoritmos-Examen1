console.log(`Declarar variables`);

const nombre = 'Bryan Cruz';
let edad = 22;
const carrera = 'Ingeniería en Sistemas';
let trimestre = 2;
const esBecado = false;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Carrera: ${carrera}`);
console.log(`Trimestre: ${trimestre}`);
console.log(`Becado: ${esBecado}`);

console.log('Modificando edad:');

edad +=5;
console.log(`Edad CAMBIADA: ${edad}`);

console.log('Modificando Trimestre:');

trimestre+=1;
console.log(`Siguiente Trimestre: ${trimestre}`);

console.log('Modificando Nombre:');

//nombre = 'Bryan Esau Cruz';
//da error porque al sere una variable constante no se puede modificar su valor desde el momento en que es declarada
console.log(`Nombre modificado: ${nombre}`);
console.log(`el Nombre no se pudo modificar`);

const ciudad = 'Santa Rosa de Copan', pais = 'Honduras', codigoPostal = 41101;

console.log(`Ciudad: ${ciudad}`);
console.log(`Pais: ${pais}`);
console.log(`Codigo Postal: ${codigoPostal}`);
