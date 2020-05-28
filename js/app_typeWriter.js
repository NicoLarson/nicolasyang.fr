document.addEventListener("DOMContentLoaded", () => {

    var app = document.getElementById('type');
    var typewriter = new Typewriter(app);
    
    typewriter.typeString('Bonjour! <br> Je suis étudiant en programmation.')
    .start();
 
})