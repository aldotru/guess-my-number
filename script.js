'use strict';

// Generating random number
let secretNumber = Math.trunc( Math.random() * 20 ) + 1;

// Setting our initial score value
let score = 20;
document.querySelector('.score').textContent = 20;

// Setting our initial highscore value
let highScore = 0;

// Action to do when clicking the "reload" button
document.querySelector('.btn.reload').addEventListener('click', function() {
    location.reload();
})

// Action to do when clicking the "check" button
document.querySelector('.btn.check').addEventListener('click', function() {
    const guess = Number( document.querySelector('.guess').value );
    console.log( guess, typeof guess )
    
    if ( !guess ) {
        // When no number or 0 is selected
        document.querySelector('.message').textContent = 'No number!';
    
    } else if ( guess === secretNumber ) {
        // When the input number is the same as the random number
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        if ( score > highScore ) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    
    } else if ( guess > secretNumber ) {
    
        if ( score > 1 ) {
            // When the input number is higher than the random number
            document.querySelector('.message').textContent = 'Too high';
            // Decreasing the initial score value by 1 when guess is incorrect
            score--;
            // Re-assign the new score value and display it
            document.querySelector('.score').textContent = score;
    
        } else {
            document.querySelector('.message').textContent = 'You are a looser';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
        }
    
    } else if ( guess < secretNumber ) {
        if ( score > 1 ) {
            // When the input number is lower than the random number
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;        
        } else {
            document.querySelector('.message').textContent = 'You are a looser';
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
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
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').removeAttribute("style");
    document.querySelector('.number').removeAttribute("style");
});