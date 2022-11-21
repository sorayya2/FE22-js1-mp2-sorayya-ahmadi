const form = document.querySelector('form');
const inputText = document.querySelector('#input-text');
const userChoice = document.querySelector('.your-choice');
const submitUserName = document.querySelector('.submitBtn');
const computerChoice = document.querySelector('.computer-choice');
const arrComputer = ['sax', 'sten', 'påse'];
const buttons = document.querySelectorAll('.buttons button');
const buttonsContainer = document.querySelector('.buttons');
const restartBtn = document.querySelector('.restartBtn');

let userPointCounter = 0;
let computerPointCounter = 0;

let computer;
computer = arrComputer[Math.round(Math.random() * 2)];

function createComputer() {
    computer = arrComputer[Math.round(Math.random() * 2)];
}
createComputer()

const mess = document.querySelector('#mess-text');
const resultMess = document.querySelector('.result-mess');

let userName = '';
const computerScore = document.querySelector('#computerScore')
const userScore = document.querySelector('#userScore')
const winner = document.querySelector('.result');


buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        userChoice.innerText = e.target.id;
        generateGame(e, e.target.id);
        computerChoice.innerText = computer
    })
});


inputText.addEventListener('keyup', (e) => {
    userName = e.target.value;
})

submitUserName.addEventListener('click', (e) => {
    e.preventDefault();
    mess.innerText = `Välkommen ${userName}`
})

function generateGame(event) {
    event.preventDefault();
    createComputer();
    let message;

    if (event.target.id == 'sax' && computer == 'sax' || event.target.id == 'sten' && computer == 'sten' || event.target.id == 'påse' && computer == 'påse') {
        message = 'Oavgjord!!';
        resultMess.innerText = message
    }

    else if (event.target.id == 'sax' && computer == 'påse' || event.target.id == 'sten' && computer == 'sax' || event.target.id == 'påse' && computer == 'sten') {
        userPointCounter++;
        message = 'Du vann!!';
        resultMess.innerText = message

    }


    else if (event.target.id == 'sax' && computer == 'sten' || event.target.id == 'sten' && computer == 'påse' || event.target.id == 'påse' && computer == 'sax') {
        computerPointCounter++;
        message = 'Datorvann!!';
        resultMess.innerText = message

    }

    if (userPointCounter == 3) {
        message = 'Du vann!';
        console.log(buttonsContainer)
        buttonsContainer.classList.add('disable');
        resultMess.innerText = message

    }

    if (computerPointCounter == 3) {
        message = 'Datorvann!';
        buttonsContainer.classList.add('disable');
        resultMess.innerText = message


    }

    computerScore.innerText = `Datorpoäng : ${computerPointCounter}`;
    userScore.innerText = `Dinpoäng : ${userPointCounter}`;
}

const restart = () => {
    computerPointCounter = 0;
    userPointCounter = 0;
    computerScore.innerText = `Datorpoäng: ${computerPointCounter}`;
    userScore.innerText = `Dinpoäng : ${userPointCounter}`;
    resultMess.innerText = "";
    buttonsContainer.classList.remove('disable');
}
restartBtn.addEventListener('click', restart);