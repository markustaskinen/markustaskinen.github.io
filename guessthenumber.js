
var randomInteger = 0;
var minimum = 1;
var maximum = 10;

function getRandomInteger(min, max) {
    randomInteger = Math.floor((Math.random() * max) + min);
}

function compareNumbers(first, second) {
    return first === second;
}

function guessTheNumber() {
    var number = parseInt(document.getElementById("number").value);
    var message = "";
    getRandomInteger(minimum, maximum);
    
    if (number >= minimum && number <= maximum && number % 1 === 0) {
        if (compareNumbers(number, randomInteger)) {
            message = "Omg that's right! You won!";
        } else {
            message = "You guessed it wrong. Try again!";
        }
    } else {
        message = "The number needs to be an integer between 1 and 10.";
    }
    alert(message);
}