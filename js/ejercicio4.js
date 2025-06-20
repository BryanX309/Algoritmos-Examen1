const estudiante = {
    nombre: 'Bryan Cruz',
    numeroCuenta: '20212120093',
        materia1: 'Calculo I',
        nota1: 85,
    materia2:'Programación I',
        nota2: 78,
    materia3: 'Dibujo II',
        nota3: 98,
    activo: true
}

console.log('Objeto declarado: ');
console.log(estudiante);

console.log('Agregando Correo: ');
estudiante.correo = 'Bryan@gmail.com';
console.log(estudiante);

console.log('Modificando Activo: ');
estudiante.activo = false;
console.log(estudiante);

console.log('Eliminando Materia y Nota: ');
delete estudiante.materia3;
delete estudiante.nota3;
console.log(estudiante);

console.log('Extrayendo Nombre y Numero de Cuenta');

const {nombre} = estudiante;
const {numeroCuenta} = estudiante;

console.log(`Nombre: ${nombre}`);
console.log(`Numero de Cuenta: ${numeroCuenta}`);

console.log('Extrayendo Notas');

const {nota1} = estudiante;
const {nota2} = estudiante;
console.log(`Nota1: ${nota1}`);
console.log(`Nota2: ${nota2}`);