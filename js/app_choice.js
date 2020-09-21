document.addEventListener("DOMContentLoaded", () => {

    let message = document.querySelector('#welcome p')
    let messageWriter = new Typewriter(message, {
        delay: 25
    })
    if (screen.width < 350) {
        message.style.cssText = 'font-size: 1rem; padding: 1rem;'
        messageWriter
            .typeString(`> Crois-tu en la destinée ?<br>
    > Choisis la pilule bleue et tout s'arrête, après tu pourrass faire de beaux rêves et penser ce que tu veux.<br> 
    > Choisis la pilule rouge, tu restes au pays des merveilles et on descend avec le lapin blanc au fond du gouffre.`)
            .start()

    } else if (screen.width < 415) {
        message.style.cssText = 'font-size: 1.1rem; padding: 1rem;'
        messageWriter
            .typeString(`
            > Je suppose que pour l'instant tu te sens un peu comme Alice, tombée dans le terrier du lapin blanc.<br>
            > Crois-tu en la destinée ?<br>
        > Choisis la pilule bleue et tout s'arrête, après tu pourras faire de beaux rêves et penser ce que tu veux.<br> 
        > Choisis la pilule rouge, tu restes au pays des merveilles et on descend avec le lapin blanc au fond du gouffre.`)
            .start()

    } else {
        messageWriter
            .typeString(`
            > Je suppose que pour l'instant tu te sens un peu comme Alice, tombée dans le terrier du lapin blanc.<br>
            > Crois-tu en la destinée ?<br>
            > Choisis la pilule bleue et tout s'arrête, après tu pourras faire de beaux rêves et penser ce que tu veux.<br> 
            > Choisis la pilule rouge, tu restes au pays des merveilles et on descend avec le lapin blanc au fond du gouffre.`)
            .start()
    }

})
