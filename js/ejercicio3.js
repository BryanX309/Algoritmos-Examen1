const num1 = 15.712, num2 = 4.314;
console.log(`Valores Manejados\nNumero 1: ${num1}\nNumero 2: ${num2}`);

const suma = num1 + num2;
const resta = num1 - num2;
const multi = num1 * num2;
const division = num1/num2;
const modulo = num1%num2;

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multi}`);
console.log(`Division: ${division}`);
console.log(`Modulo : ${modulo}`);

console.log(`Suma Redondeada hacia Arriba: ${Math.ceil(suma)}`);
console.log(`Suma Redondeada hacia Abajo: ${Math.floor(suma)}`);
console.log(`Suma Redondeada al Entero Cercano: ${Math.round(suma)}`);

console.log(`Raíz Cuadrada de la Suma: ${Math.sqrt(suma)}`);

const conver_decimal = parseFloat('25.89')
console.log(conver_decimal);

const conver_entero = parseInt('4');
console.log(conver_entero);

console.log(`es ${num1} un Numero entero: ${Number.isInteger(num1)}`);

console.log(`${num2} redondeado a un decimal: ${num2.toFixed(1)}`);
