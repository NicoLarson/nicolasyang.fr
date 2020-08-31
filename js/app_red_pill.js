document.addEventListener("DOMContentLoaded", () => {

    let welcome = document.querySelector('#type');
    let welcomeWriter = new Typewriter(welcome, {
        delay: 50
    });
    welcomeWriter
        .typeString(`Bonjour... <br>
        Je suis Nicolas Yang. <br>Etudiant en programation.<br>
        <br>
        Bienvenu dans mon portfolio. <br>
            &darr;<br>
            &darr;<br>
            &darr;`)
        .start()

    let numVi = document.querySelector("#numVi > ol")
    let viLength = 20
    if(document.body.clientWidth <= 320){
        viLength = 51
    }else if(document.body.clientWidth <= 360){
        viLength = 43
    }else if(document.body.clientWidth <= 375){
        viLength = 42
    }else if(document.body.clientWidth <= 400){
        viLength = 37
    }else if(document.body.clientWidth <= 450){
        viLength = 33
    }else if(document.body.clientWidth <= 768){
        viLength = 19
    }else if(document.body.clientWidth <= 1280){
        viLength = 12
    }else if(document.body.clientWidth <= 1440){
        viLength = 11
    }else if(document.body.clientWidth <= 1920){
        viLength = 9
    }
    for (let i = 0; i < viLength; i++) {
        numVi.innerHTML += `<li>${i+1}</li>`
    }

})