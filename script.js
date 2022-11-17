'use strict';
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent)

// //handling dom manipulation
// document.querySelector('.number').textContent = 11;
// document.querySelector('.score').textContent = 19;
// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

// Handling click events

let Secretnumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) { /// you can do this same function for all the other re written code!!
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
            // document.querySelector('.message').textContent = 'No Number!' // no input
        displayMessage('No Number!')
    } else if ( guess === Secretnumber) { //when player wins
        // document.querySelector('.message').textContent = 'Correct Number!'
                displayMessage('Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = Secretnumber;
        if(score > highScore) {
            highScore = score;   
             document.querySelector('.highscore').textContent = highScore;
        }

    } else if(guess !== Secretnumber) { //when guess is wrong
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > Secretnumber ?  'Too High!': 'To Low'
            displayMessage(guess > Secretnumber ?  'Too High!': 'To Low')
            score += -1
            document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = 'you lost the game !!'
                displayMessage('you lost the game !!')
                document.querySelector('.score').textContent = 0;
            }
     } 
    // else if (guess > Secretnumber){ // guess is too high
    //     if(score > 1) {
    //     document.querySelector('.message').textContent = 'Too High!'
    //     score += -1
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'you lost the game !!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    //  } else if(guess < Secretnumber){ // When guess is too low
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!'
    //         score += -1
    //         document.querySelector('.score').textContent = score;
    //         } else {
    //             document.querySelector('.message').textContent = 'you lost the game !!'
    //             document.querySelector('.score').textContent = 0;
    //         }
    //     }
    }

)

// reset game button
document.querySelector('.again').addEventListener('click', function() {
    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage( 'Start guessing...')
    score = 20;
    Secretnumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
})
