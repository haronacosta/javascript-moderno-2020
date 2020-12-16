// Comparar dos numeros

const numero1 = 20;

const numero2 = '20';

const numero3 = 30;

// Comparado no estricto (Valida el valor)
console.log(numero1 == numero2);

// Comparador estricto (Valida el valor y el tipo de dato)
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2));
console.log(numero1 === numero3);

// Diferente
const password1 = 'admin';
const password2 = 'Admin';

console.log(password1 != password2);

console.log(numero1 != numero2);

console.log(numero1 !== numero2);
