'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore;
let prevScore;

// document.querySelector('.number').textContent = number;
document.querySelector('.guess').textContent = null;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
    //when player wins
  } else if (guess === number) {
    highScore = score;
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Correct Number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score < highScore) {
      document.querySelector('.highscore').textContent = highScore;
    } else {
      document.querySelector('.highscore').textContent = score;
    }
  }

  // when guess is too high
  else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high !';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost !';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low !';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost !';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
