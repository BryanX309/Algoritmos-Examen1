const frase = "   Estoy aprendiendo JavaScript en el CUROC    "

console.log(`Frase: ${frase}`);
console.log(`Largo de Frase: ${frase.length}`);
console.log(`Frase Sin Espacios al Inicio: ${frase.trimStart()}`);
console.log(`Frase Sin Espacios al Final: ${frase.trimEnd()}`);
console.log(`Frase Sin Espacios al Inicio y Final: ${frase.trim()}`);
console.log(`Frase en Mayúsculas: ${frase.trim().toUpperCase()}`);
console.log(`Frase en Minúsculas: ${frase.trim().toLowerCase()}`);

console.log(`La frase Incluye "Javascript"?: ${frase.includes('JavaScript')}`);
console.log(`"CUROC" fue encontrado en la posición: ${frase.indexOf('CUROC')} de la Frase`);

console.log('Reemplazando CUROC por UNAH-COPAN');
console.log(`${frase.trim().replace('CUROC', 'UNAH-COPAN')}`);

console.log('Frase Dividida en un Array');
console.log(frase.trim().split(' '));

console.log('Mostrando solo las primeras 6 letras');
console.log(frase.trim().slice(0,6));

console.log('Mostrando "JavaScript" solo usando substring o slice');

console.log(frase.trim().substring(frase.trim().indexOf('JavaScript'), frase.trim().indexOf('JavaScript')+'JavaScript'.length));
