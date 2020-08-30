document.addEventListener("DOMContentLoaded", () => {

    let welcome = document.querySelector('#welcome p')
    let welcomeWriter = new Typewriter(welcome, {
        delay: 50
    })
    welcomeWriter
        .typeString(`Wake up...<br>
        The Matrix has you...<br>
        Take the red pill, you stay in wonderland. And I show you how deep the rabbit-hole goes.<br>
        Take the blue pill. The story ends. You wake up in your bed and believe whatever you want to
                    believe.`)
        .start()

})