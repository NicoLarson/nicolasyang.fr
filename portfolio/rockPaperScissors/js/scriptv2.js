document.addEventListener("DOMContentLoaded", () => {


    let playerChoice, playerScore = 0,
        robotChoice, robotScore = 0
    const choices = ["rock", "paper", "scissors"]
    const play = document.querySelector("#play")
    const showPlayerScore = document.querySelector("#playerScore")
    const showRobotScore = document.querySelector("#robotScore")
    const theGame = document.querySelector("main > h2")
    const nRound = document.querySelector("#round")
    const reset = document.getElementById("reset")

    let i = 0

    //* Reset button
    reset.addEventListener('click', () => {
        i = 0
        playerScore = 0
        robotScore = 0
        showPlayerScore.innerText = playerScore
        showRobotScore.innerText = robotScore
        theGame.innerText = "Please chose a weapon"
    })

    play.addEventListener('click', () => {
        i++
        //* If undefined
        if (playerChoice == undefined) {
            theGame.innerText = "Please chose a weapon"
            i--
        } else if (i < 6) {
            nRound.innerText = "Round " + i
            robotChoice = choices[Math.round(Math.random() * 2)];
            rules()
            theGame.innerText = "You chose " + playerChoice + " and the robot chose " + robotChoice + " !"
            //* Table score
            showPlayerScore.innerText = playerScore
            showRobotScore.innerText = robotScore
        } else {
            if (playerScore > robotScore) {
                theGame.innerText = "You win!"
            } else if (playerScore < robotScore) {
                theGame.innerText = "You lose!"
            }
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