// Run Script In Strict Mode
"use strict";
const userOptions = {
    options: ["Rock", "Paper", "Scissor"],
    images: ["fa-hand-rock", "fa-hand-paper", "fa-hand-scissors"]
};

//Grabbed Elements from the DOM as a Global Variables
let options = Array.from(document.querySelectorAll('.options'));
// Converted HTML collection into an array
const images = Array.from(document.querySelectorAll('.image'));
const currentPlayerScore = document.getElementById('current-player-score');
const currentComputerScore = document.getElementById('current-computer-score');
const output=document.getElementById('result');

//This function will add click events on the button
function addClickEvents() {
    //Iterate through each elements
    options.forEach((element, index) => {
        element.addEventListener('click', playGame);
    });
}


//Function to start game
function playGame(event) {
    let userChoice = event.target.innerText;
    let userChoiceIndex = userOptions.options.indexOf(userChoice);
    if (userChoiceIndex === -1) {
        alert('Unable to find to your choice!!!')
    }
    else {
        images[0].childNodes[1].classList = `fas ${userOptions.images[userChoiceIndex]}`;
        addAnimations();
        getResult(userChoiceIndex);
        removeClickEvents();
    }
}

//Function to remove events from the button
function removeClickEvents() {
    options.forEach((element, index) => {
        element.removeEventListener('click', playGame);
    })

}


//Function to add Animations
function addAnimations() {
    images.forEach((element) => {
        element.classList.add('animation');
    })

}

//Function to get Random Number
function getRandomNumber() {
    let min = 0, max = userOptions.options.length;
    return Math.floor(min + Math.random() * (max - min));
}

//Function to get Computer Result
function getResult(userChoiceIndex) {
    // After the end of animation,the following piece of code will be executed
    //This code can be replaced with the 'animationend' event but i got error in this code so i did this to override the bug.
    setTimeout(() => {
        let randomIndex = getRandomNumber();
        images[1].childNodes[1].classList = `fas ${userOptions.images[randomIndex]}`;
        removeAnimations();
        displayResult(userChoiceIndex, randomIndex);
        addClickEvents();
    }, 2000);

}

// Function to remove animations
function removeAnimations() {
    images.forEach((element) => {
        element.classList.remove('animation');
    })
}

//Function to display Result
function displayResult(playerChoice, computerChoice) {
    playerChoice = userOptions.options[playerChoice];
    computerChoice = userOptions.options[computerChoice];
    if (playerChoice === computerChoice) {
        output.innerText="Tie";
    }
    else if ((playerChoice === "Rock" && computerChoice === "Scissor") || (playerChoice === "Scissor" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock")) {
        let currentPlayerScoreValue = +currentPlayerScore.innerText;
        currentPlayerScoreValue++;
        currentPlayerScore.innerText = currentPlayerScoreValue;
        output.innerText="Player Wins!!!"
    }
    else {
        let currentComputerScoreValue = +currentComputerScore.innerText;
        currentComputerScoreValue++;
        currentComputerScore.innerText = currentComputerScoreValue;
        output.innerText="Computer Wins!!!";
    }
    output.style.visibility="visible";
    setTimeout(() => {
        output.style.visibility="hidden";
    }, 1000);

}


addClickEvents();
// Pramesh Karki













