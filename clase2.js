const num = 7;
const maxMulti = 10;
const maxQty = 100;
const maxPrimeQty = 1000;
const avgNum1 = 10;
const avgNum2 = 20;

// Punto 1
for (let i = 1; i <= maxMulti; i++) {
    console.log(`Tabla multiplicar: ${num} x ${i} = ${num * i}`);
}

// Punto 2
for (let i = 0; i <= 11; i++) {
    isPrime(i) ? console.log(`${i} es numero primo`): console.log(`${i} no es numero primo`);    
}

// Punto 3
for (let i = 0; i <= maxQty; i++) {
    if (isPrime(i)) {
        console.log(`${i} es numero primo!`);
    }
}

// Punto 4
let qtyCounter = 0;

for (let i = 0; i <= maxPrimeQty; i++) {
    if (isPrime(i) && qtyCounter < maxQty) {
        console.log(`${i} esta entre los primeros ${maxQty} numeros primos!`);
        qtyCounter++;
    }
}

console.log('Cantidad de numeros primos encontrados: ', qtyCounter)

// Punto 5
alert(`El promedio para ${avgNum1} y ${avgNum2} es: ${calculateAverage(avgNum1, avgNum2)}`);

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function calculateAverage(num1, num2) {
    return (num1 + num2) / arguments.length;
}