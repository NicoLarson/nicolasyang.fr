document.addEventListener("DOMContentLoaded", () => {

    //* Version 2

    let playerChoice, playerScore = 0,
        robotChoice, robotScore = 0
    let choices = ["rock", "paper", "scissors"]

    let play = document.querySelector("#play")
    play.addEventListener('click', () => {
        robotChoice = choices[Math.round(Math.random() * 2)];
        rules()
        console.log(playerChoice)
        console.log(robotChoice)
    // TODO : Score
        console.log(playerScore)
        console.log(robotScore)
    })

    //* Player Choices
    let rock = document.querySelector("#rock")
    rock.addEventListener('click', () => {
        playerChoice = "rock"
    })
    let paper = document.querySelector("#paper")
    paper.addEventListener('click', () => {
        playerChoice = "paper"
    })
    let scissors = document.querySelector("#scissors")
    scissors.addEventListener('click', () => {
        playerChoice = "scissors"
    })

    //* Rules
    let rules = () => {
        if (robotChoice == "rock" && playerChoice == "rock") {
            return "Drawww.";
        } else if (robotChoice == "rock" && playerChoice == "paper") {
            playerScore++;
            return "You Win!";
        } else if (robotChoice == "rock" && playerChoice == "scissors") {
            robotScore++
            return "You Lose!";
        } else if (robotChoice == "paper" && playerChoice == "rock") {
            robotScore++
            return "You Lose!";
        } else if (robotChoice == "paper" && playerChoice == "paper") {
            return "Drawww.";
        } else if (robotChoice == "paper" && playerChoice == "scissors") {
            playerScore++
            return "You Win!";
        } else if (robotChoice == "scissors" && playerChoice == "rock") {
            playerScore++
            return "You Win!";
        } else if (robotChoice == "scissors" && playerChoice == "paper") {
            robotScore++
            return "You Lose!";
        } else if (robotChoice == "scissors" && playerChoice == "scissors") {
            return "Drawww.";
        } else {
            return "Follow the instructions please!"
        }
    }
    // TODO : 5 turns
    let x = 0
    for (let i = 0; i < 5; i++) {
        x += 2
        console.log(x)
    }

})