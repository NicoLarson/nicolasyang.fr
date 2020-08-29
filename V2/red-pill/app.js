document.addEventListener("DOMContentLoaded", () => {

    let welcome = document.querySelector('#type');
    let welcomeWriter = new Typewriter(welcome, {
        delay: 50
    });
    welcomeWriter
        .typeString(`Bonjour ... <br>
        Je suis Nicolas Yang. <br>Etudiant en programation.<br>
        <br>
        Bienvenu dans mon portfolio. <br>
            &darr;<br>
            &darr;<br>
            &darr;`)
        .start()

})