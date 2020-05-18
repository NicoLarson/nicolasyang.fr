document.addEventListener("DOMContentLoaded", () => {

    let elTitle = document.querySelector('section>dl>dt');
    let elIam =  document.querySelector('section>dl>dd');
    var pos = 0;
    let pos2 = 0
    let hello = "Bonjour!";
    let iAm = "Je suis étudiant en programmation."
    var speed = 200;

    setTimeout(typeWriter, speed);
    setTimeout(typeWriterb,speed)
    function typeWriter() {
        if (pos < hello.length) {
            elTitle.innerHTML += hello.charAt(pos);
            pos++;
            setTimeout(typeWriter, speed);
        }
    }
    function typeWriterb() {
        if (pos2 < iAm.length) {
            elIam.innerHTML += iAm.charAt(pos2);
            pos2++;
            setTimeout(typeWriterb, speed);
        }
    }

})