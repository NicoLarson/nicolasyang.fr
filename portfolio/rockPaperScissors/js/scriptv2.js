document.addEventListener("DOMContentLoaded", () => {

    //* Version 2
    let playerChoice, playerScore = 0,
        robotChoice, robotScore = 0
    let choices = ["rock", "paper", "scissors"]
    let play = document.querySelector("#play")
    let showPlayerScore = document.querySelector("#playerScore")
    let showRobotScore = document.querySelector("#robotScore")
    let theGame = document.querySelector("main > h2")
    let nRound = document.querySelector("#round")
    let i = 0

// TODO : Button RESET and You win You lose
    play.addEventListener('click', () => {
        i++
        if (i < 6) {
            nRound.innerText = "Round " + i
            robotChoice = choices[Math.round(Math.random() * 2)];
            rules()
            theGame.innerText = "You chose " + playerChoice + " and the robot chose " + robotChoice + " !"
            //* Table score
            showPlayerScore.innerText = playerScore
            showRobotScore.innerText = robotScore
        }
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

})