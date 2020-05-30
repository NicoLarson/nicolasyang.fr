document.addEventListener("DOMContentLoaded", () => {


    let playerChoice, playerScore = 0,
        robotChoice, robotScore = 0, i = 0
    const choices = ["rock", "paper", "scissors"]
    const showPlayerScore = document.getElementById("playerScore")
    const showRobotScore = document.getElementById("robotScore")
    const reset = document.getElementById("reset")
    const rock = document.getElementById("rock")
    const paper = document.getElementById("paper")
    const scissors = document.getElementById("scissors")

    //* Reset button
    reset.addEventListener('click', () => {
        playerScore = 0
        robotScore = 0
        showPlayerScore.innerText = playerScore
        showRobotScore.innerText = robotScore
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

    rock.addEventListener("click", () => {
        playerChoice = "rock"
        play()
    })
    paper.addEventListener("click", () => {
        playerChoice = "paper"
    })

    scissors.addEventListener("click", () => {
        playerChoice = "scissors"
    })

    //* Play

    let play = () => {
        i++
        if (i < 6) {
            robotChoice = choices[Math.round(Math.random() * 2)];
            rules()
            //* Table score
            showPlayerScore.innerText = playerScore
            showRobotScore.innerText = robotScore
        } else {
            if (playerScore > robotScore) {
            } else if (playerScore < robotScore) {
            }
        }
    }
})

