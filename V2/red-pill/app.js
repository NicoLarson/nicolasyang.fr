document.addEventListener("DOMContentLoaded", () => {

    let menu1 = document.querySelector('#menu>li:first-child>a')
    let typeMenu1 = new Typewriter(menu1,{
        delay:50
    })
    typeMenu1.typeString('Compétences')
    .start()
.stop()
    let welcome = document.getElementById('type');
    let typewriter = new Typewriter(welcome,{
    delay: 50
    });
    typewriter
    .pauseFor(1000)
    .typeString('Bonjour ... <br> Je suis Nicolas Yang. Etudiant en programation.')
    .start();
    
 
})