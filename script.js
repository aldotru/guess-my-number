'use strict';

// Generating random number
let secretNumber = Math.trunc( Math.random() * 20 ) + 1;

// Setting our initial score value
let score = 20;
document.querySelector('.score').textContent = 20;

// Setting our initial highscore value
let highScore = 0;

// Function to display content on ".message" element
const displayMessage = (message) => { 
    document.querySelector('.message').textContent = message;
}

// Function to display value for ".score" element
const scoreValue = (scoreVal) => {
    document.querySelector('.score').textContent = scoreVal;
}

// Function to display value for ".number" element
const numberValue = (numberVal) => {
    document.querySelector('.number').textContent = numberVal;
}

// Function to display value for ".highscore" element
const highScoreValue = (highScoreVal) => {
    document.querySelector('.highscore').textContent = highScoreVal;
}

// Action to do when clicking the "reload" button
document.querySelector('.btn.reload').addEventListener('click', function() {
    location.reload();
})

// Action to do when clicking the "check" button
document.querySelector('.btn.check').addEventListener('click', function() {
    const guess = Number( document.querySelector('.guess').value );
    
    if ( !guess ) {
        // When no number or 0 is selected
        displayMessage('No number!');
        
    } else if ( guess === secretNumber ) {
        // When the input number is the same as the random number
        displayMessage('Correct number!');
        numberValue(secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if ( score > highScore ) {
            highScore = score;
            highScoreValue(highScore);
        }
    
    // When guess number is wrong (different from secret number)
    } else if ( guess !== secretNumber ) {

        if ( score > 1 ) {
            // When input number is higher/lower than the secret number
            // using ternaty operator (conditional operator)
            displayMessage( guess > secretNumber ? 'Too high' : 'Too low' );
            // Decreasing the initial score value by 1 when guess is incorrect
            score--;
            // Re-assign the new score value and display it
            scoreValue(score);
    
        } else {
            displayMessage('You are a looser');
            document.querySelector('body').style.backgroundColor = 'red';
            scoreValue(0);
        }
    }
});

// Action to do when clicking the "again" button
document.querySelector('.btn.again').addEventListener('click', function() {
    
    // Reassigning initial number
    score = 20;
    
    // Generating a new random number
    secretNumber = Math.trunc( Math.random() * 20 ) + 1;
    
    // Reseting initial values
    displayMessage('Start guessing...');
    scoreValue(score);
    numberValue('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').removeAttribute("style");
    document.querySelector('.number').removeAttribute("style");
});