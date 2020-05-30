document.addEventListener("DOMContentLoaded", () => {


    let playerChoice, playerScore = 0,
        robotChoice, robotScore = 0, i = 0
    const choices = ["rock", "paper", "scissors"],
     showPlayerScore = document.getElementById("playerScore"),
     showRobotScore = document.getElementById("robotScore"),
     showPlayerChoice = document.getElementById("playerChoice"),
     showRobotChoice = document.getElementById("robotChoice"),
     reset = document.getElementById("reset"),
     rock = document.getElementById("rock"),
     paper = document.getElementById("paper"),
     scissors = document.getElementById("scissors"),
     theGame = document.querySelector("main>h2")


    //* Reset button
    reset.addEventListener('click', () => {
        i = 1
        playerScore = 0
        robotScore = 0
        showPlayerScore.innerText = playerScore
        showRobotScore.innerText = robotScore
        theGame.innerHTML = "ROUND 1"
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
    //* Player Choices
    rock.addEventListener("click", () => {
        if (i < 6) {
            playerChoice = "rock"
            showPlayerChoice.innerHTML = `<i class="far fa-hand-rock"></i>`
            play()
        }
    })
    paper.addEventListener("click", () => {
        if (i < 6) {
            playerChoice = "paper"
            showPlayerChoice.innerHTML = `<i class="far fa-hand-paper"></i>`
            play()
        }
    })
    scissors.addEventListener("click", () => {
        if (i < 6) {
            playerChoice = "scissors"
            showPlayerChoice.innerHTML = `<i class="far fa-hand-scissors"></i>`
            play()
        }
    })

    //* The Game
    let play = () => {
        i++
        if (i < 6) {
            theGame.innerHTML = `Round ${i}`
            robotChoice = choices[Math.round(Math.random() * 2)];
            if (robotChoice == "rock") {
                showRobotChoice.innerHTML = `<i class="far fa-hand-rock"></i>`
            } else if (robotChoice == "paper") {
                showRobotChoice.innerHTML = `<i class="far fa-hand-paper"></i>`
            } else {
                showRobotChoice.innerHTML = `<i class="far fa-hand-scissors"></i>`
            } rock
            rules()
            //* Table score
            showPlayerScore.innerText = playerScore
            showRobotScore.innerText = robotScore
        } else {
            if (playerScore > robotScore) {
                theGame.innerHTML = "You Win !"
            } else if (playerScore < robotScore) {
                theGame.innerHTML = "You Lose !"
            } else {
                theGame.innerHTML = "Drawww..."
            }
        }
    }
})

