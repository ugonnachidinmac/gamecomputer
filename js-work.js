
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

    /*
if (!score) {
score = {
    wins: 0,
    losses: 0,
    ties: 0
};
}
*/
let isAutoPlay = false;
let intervalId;

// const autoPlay = () => {


// };

// function autoPlay() {
//     if (!isAutoPlay){
//         intervalId = setInterval(() => {
//             const playermove = pickComputerMove();
//             playGame(playermove);
//         }, 2000);
//         isAutoPlay = true;
//     } else {
//         clearInterval(intervalId);
//         isAutoPlay = false;
//     }
//     }


function toggleAutoPlay() {
    if (!isAutoPlay) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
}

function startAutoPlay() {
    intervalId = setInterval(() => {
        const playermove = pickComputerMove();
        playGame(playermove);
    }, 2000);
    isAutoPlay = true;
    document.querySelector('.auto-play-button').innerText = 'Stop Play';
}

function stopAutoPlay() {
    clearInterval(intervalId);
    isAutoPlay = false;
    document.querySelector('.auto-play-button').innerText = 'Auto Play';
}
   
    document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    });

    document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    });

    document.querySelector('.js-scissor-button')
    .addEventListener('click', () => {
        playGame('scissor');
    });


document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p'){
        playGame('paper');
    }else if (event.key === 's'){
        playGame('scissor');
    }
});

function playGame(playMove){
    const computerMove = pickComputerMove();

// compare the moves to get the result
let result = '';

    if (playMove === 'scissor'){
        if (computerMove === 'rock'){
    result = 'You lose.';
}else if (computerMove === 'paper'){
    result = 'You win.';
}else if (computerMove === 'scissor'){
    result = 'You Tie.';
}

    }else if (playMove === 'paper'){
        if (computerMove === 'rock'){
    result = 'You win.';
}else if (computerMove === 'paper'){
    result = 'You Tie.';
}else if (computerMove === 'scissor'){
    result = 'You lose.';
}

    }else if (playMove === 'rock'){
        if (computerMove === 'rock'){
    result = 'You Tie.';
}else if (computerMove === 'paper'){
    result = 'You lose.';
}else if (computerMove === 'scissor'){
    result = 'You win.';
}

    }

    if (result === 'You win.'){
        score.wins ++;
    }else if (result === 'You lose.'){
        score.losses ++;
    }else if (result === 'You Tie.'){
        score.ties ++;
    }

    localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

    /* using DOm to put the reult and the move in the <p> and display it on the web page*/

   document.querySelector('.js-result').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `You
<img src="image/${playMove}-emoji.png" class="move-icon">
<img src="image/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML =`Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = ''; //now we return it because the return statement we help us get the value of the function scope.
    //return it to use the same variable name again in other place to avoid conflict

// computer randomly selects a move
if(randomNumber >= 0 && randomNumber < 1/3){
computerMove = 'rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'paper';
}else if (randomNumber >= 2/3 && randomNumber < 1){
computerMove = 'scissor';
}

return computerMove;
}