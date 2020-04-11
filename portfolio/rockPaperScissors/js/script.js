document.addEventListener("DOMContentLoaded", () => {

    // Version 2
    let choices = [Rock, Paper, Scissors]
    let playerScore = 0
    let robotScore = 0
    let printout = 0

    for (let i = 3; i > 0; i--) {
        let pChoice
        let rChoice = choices[Math.round(Math.random() * 2)]
            (pChoice == choices[0] && rChoice == choices[0]) ? (
                alert("Draw")
            ) : (
                (pChoice == choices[0] && rChoice == choices[1])
            ) ? (
                alert("You lose!"),
                robotScore++
            ) : (
                (pChoice == choices[0] && rChoice == choices[2])
            ) ? (
                alert("You win!"),
                playerScore++
            ) : (
                (pChoice == choices[1] && rChoice == choices[0])
            ) ? (
                alert("You win!"),
                playerScore++
            ) : (
                (pChoice == choices[1] && rChoice == choices[1])
            ) ? (
                alert("Draw")
            ) : (
                (pChoice == choices[1] && rChoice == choices[2])
            ) ? (
                alert("You lose!"),
                robotScore++
            ) : (
                (pChoice == choices[2] && rChoice == choices[0])
            ) ? (
                alert("You win!"),
                playerScore++
            ) : (
                (pChoice == choices[2] && rChoice == choices[1])
            ) ? (
                alert("You lose!"),
                robotScore++
            ) : (
                (pChoice == choices[2] && rChoice == choices[2])
            ) ? (
                alert("Draw")
            ) : (
                false
            )
    }

    // Resultats

    // Loop 5 tours

    // Jeux




    /* algo
    Titre : chifoumi
    Variables :
    choix = [P, F, S]
    joueur = [choix, scrore]
    robot = [choix, score]
    loop
    for ( let i = 3; i >= 0; i--)
        saisir joueur.choix
            SI (joueur?choix == P && robot.choix == P)
            AFFICHER "Draw"
            SI (joueur?choix == P && robot.choix == F)
            AFFICHER "You lose"
            robot.score ++
            SI (joueur?choix == P && robot.choix == S)
            AFFICHER "You win"
            joueur.score ++
            SI (joueur?choix == F && robot.choix == P)
            AFFICHER "You win"
            joueur.score ++
            SI (joueur?choix == F && robot.choix == F)
            AFFICHER "Draw"
            SI (joueur?choix == F && robot.choix == S)
            AFFICHER "You lose"
            robot.score ++
            SI (joueur?choix == S && robot.choix == P)
            AFFICHER "You lose"
            robot.score ++
            SI (joueur?choix == S && robot.choix == F)
            AFFICHER "You win"
            joueur.score ++
            SI (joueur?choix == S && robot.choix == S)
            AFFICHER "Draw"
        FINSI
        FINSI
        FINSI
        FINSI
        FINSI
        FINSI
        FINSI
        FINSI
        FINSI
    */


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