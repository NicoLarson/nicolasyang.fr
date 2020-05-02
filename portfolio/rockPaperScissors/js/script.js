document.addEventListener("DOMContentLoaded", () => {

console.log("okok")
// TODO: Resultats

    // TODO: Loop 5 tours


    alert("Chose your weapon! And play!");

    let player, robot, choices = ["ROCK", "PAPER", "SCISSORS"]

    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        player = "ROCK";
    })
    const paper = document.querySelector("#paper");
    paper.addEventListener('click', () => {
        player = "PAPER";
    })
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', () => {
        player = "SCISSORS";
    })

    // Jeux Chifoumi
    let playRound = () => {
        if (robot == "ROCK" && player == "ROCK") {
            return "Drawww.";
        } else if (robot == "ROCK" && player == "PAPER") {
            return "You Win!";
        } else if (robot == "ROCK" && player == "SCISSORS") {
            return "You Lose!";
        } else if (robot == "PAPER" && player == "ROCK") {
            return "You Lose!";
        } else if (robot == "PAPER" && player == "PAPER") {
            return "Drawww.";
        } else if (robot == "PAPER" && player == "SCISSORS") {
            return "You Win!";
        } else if (robot == "SCISSORS" && player == "ROCK") {
            return "You Win!";
        } else if (robot == "SCISSORS" && player == "PAPER") {
            return "You Lose!";
        } else if (robot == "SCISSORS" && player == "SCISSORS") {
            return "Drawww.";
        } else {
            return "Follow the instructions please!"
        }
    }

    const play = document.querySelector('#play');
    play.addEventListener('click', () => {
        {
            robot = choices[Math.round(Math.random() * 2)];
            playRound()
            alert("You choose " + player + " and robot choose " + robot + ".")
            alert(playRound())
        }
    })

})
