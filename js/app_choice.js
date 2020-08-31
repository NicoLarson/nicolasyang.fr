document.addEventListener("DOMContentLoaded", () => {

    let welcome = document.querySelector('#welcome p')
    let welcomeWriter = new Typewriter(welcome, {
        delay: 50
    })
    const mediaQueryList = window.matchMedia("(max-height: 568px)");
    if (mediaQueryList.matches) {
        welcomeWriter
            .typeString(`> Crois-tu en la destinée ?<br>
        Choisis la pilule bleue et tout s'arrête, après tu pourra faire de beaux rêves et penser ce que tu veux.<br> 
        Choisis la pilule rouge, tu restes au pays des merveilles et on descend avec le lapin blanc au fond du gouffre.`)
            .start()
    } else {
        welcomeWriter
            .typeString(`
            > Je suppose que pour l'instant tu te sens un peu comme Alice, tombée dans le terrier du lapin blanc.<br>
            > Crois-tu en la destinée ?<br>
            > Choisis la pilule bleue et tout s'arrête, après tu pourra faire de beaux rêves et penser ce que tu veux.<br> 
            > Choisis la pilule rouge, tu restes au pays des merveilles et on descend avec le lapin blanc au fond du gouffre.`)
            .start()
    }

})