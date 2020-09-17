        const rps = ['rock', 'paper', 'scissors'];
        const btns = document.querySelectorAll('.choose-btn');
        const mainContainer = document.querySelector('#main-container');
        const resultContainer = document.querySelector('.result-container');
        const results = document.querySelector('.results');
        const text = document.querySelector('.text');
        const resetBtn = document.createElement('button');
        resetBtn.setAttribute('class', 'reset-btn');
        resetBtn.innerHTML = 'Reset Game';
        const player = document.querySelector('#player');
        const computer = document.querySelector('#computer');

        let playerChoice = [];
        let choice = playerChoice;
        let playerScore = 0;
        let computerScore = 0;

        updateScore();

        //Track score to 5
        function checkScore() {
            if (playerScore >= 5) {
                text.textContent = "You are the winner";
                results.textContent = '';
                removeBtns();
                appendReset();
                addReset();

            } else if (computerScore >= 5) {
                text.textContent = "You lose :(";
                results.textContent = '';
                removeBtns();
                appendReset();
                addReset();

            } else {
                results.textContent = "Shoot again"
            }
        }

        //Play a single round of RPS
        function playRound() {

            //get player choice
            let playerSelection = choice;

            let computerSelection = computerPlay();
            console.log(computerSelection);


            if (playerSelection == computerSelection) {
                text.textContent = "It's a TIE!";
            } else {
                if (playerSelection == rps[0] && computerSelection == rps[1]) {
                    computerScore++;
                    text.textContent = "You Lose. Paper beats rock.";
                } else if (playerSelection == rps[0] && computerSelection == rps[2]) {
                    playerScore++;
                    text.textContent = "You Win! Rock beats scissors.";
                } else if (playerSelection == rps[1] && computerSelection == rps[0]) {
                    playerScore++;
                    text.textContent = "You Win! Paper beats rock.";
                } else if (playerSelection == rps[1] && computerSelection == rps[2]) {
                    computerScore++;
                    text.textContent = "You Lose! Scissors beats paper.";
                } else if (playerSelection == rps[2] && computerSelection == rps[0]) {
                    computerScore++;
                    text.textContent = "You Lose! Rock beats scissors.";
                } else {
                    playerScore++;
                    text.textContent = "You Win! Scissors beats paper.";
                }
            }
        }

        function updateScore() {
            player.textContent = playerScore;
            computer.textContent = computerScore;
        }

        //get computer choice
        function computerPlay() {
            let randomNum = Math.floor(Math.random() * 3);
            return rps[randomNum];
        };

        //addEventListener to all choice buttons
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function () {
                playerChoice = this.id;
                choice = playerChoice.toString();
                console.log(choice);
                playRound(choice);
                checkScore();
                updateScore();
                console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
            });
        }


        function removeBtns() {
            for (let i = 0; i < btns.length; i++) {
                btns[i].parentNode.removeChild(btns[i]);
            }
        }

        function appendBtns() {
            for (let i = 2; i >= 0; i--) {
                mainContainer.prepend(btns[i]);
            }
        }

        function appendReset() {
            mainContainer.prepend(resetBtn);
        }

        function removeReset() {
            resetBtn.parentNode.removeChild(resetBtn);
        }



        function addReset() {
            resetBtn.addEventListener('click', resetGame);
        }


        //Reset Game
        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            text.textContent = '';
            results.textContent = '';
            appendBtns();
            removeReset();
            updateScore();
        }


