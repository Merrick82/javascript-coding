const winPoints = 10;
const losePoints = 2;

const questions = ['Como se llama la pelicula donde los seres humanos viven en un mundo virtual y controlado por computadoras?', 
'En que año se estreno?', 'Cual es el nombre del protagonista?'];

const answers = ['The Matrix', '1999', 'Keanu Reeves'];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var total = 0;
var correctQty = 0;

for (var i = 0; i < questions.length; i++) {
    var response = prompt(questions[i]);
    console.log(`Respuesta a la pregunta ${i+1}: ${response}`);

    if (response.toUpperCase() === answers[i].toUpperCase()) {
        total += winPoints;
        correctQty++;
        console.log(`Correcto: suma ${winPoints} puntos. El total hasta ahora es ${total}.`);
    } else {
        total -= losePoints;
        console.log(`Equivocado: pierde ${losePoints} puntos. El total hasta ahora es ${total}.`);
    }
}

console.log(`El total obtenido en la trivia fue de ${total}`);

total > 0 ? alert(`Acertaste ${correctQty} respuest${correctQty > 1 ? 'as' : 'a'} y obtuviste ${total} puntos!!`) 
    : alert('Tu puntaje fue menor que cero, deberia darte verguenza!!');