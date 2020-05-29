document.addEventListener("DOMContentLoaded", () => {

    gsap.fromTo(".char, .backWheel, #clip7, #clip6, #clip5, #clip4, #clip3, #clip2, #clip1, .frontWheel, #clip14, #clip13, #clip12, #clip11, #clip10, #clip9, #clip8",
        { x: -2000, y: 0 }, { x: 0, y: 0, duration: 3 })

    //*Annimation Label
    gsap.fromTo(".labelBlueDark",
        { x: -2000, y: 0 }, { x: 0, y: 0, duration: 5 })
    gsap.fromTo(".labelBlue",
        { x: -2000, y: 0 }, { x: 0, y: 0, duration: 4 })
    gsap.fromTo(".labelOrange",
        { x: -2000, y: 0 }, { x: 0, y: 0, duration: 5.5 })
    gsap.fromTo(".labelYellow",
        { x: -2000, y: 0 }, { x: 0, y: 0, duration: 4.5 })

    TweenMax.to("#labelTextBlueDark", 1, { opacity: 1, delay: 4.8 })
    TweenMax.to("#labelTextBlue", 1, { opacity: 1, delay: 4 })
    TweenMax.to("#labelTextOrange", 1, { opacity: 1, delay: 5 })
    TweenMax.to("#labelTextYellow", 1, { opacity: 1, delay: 4.2 })


    //* Text CLICK
    const labelBlue = document.getElementById("labelTextBlue")
    labelBlue.addEventListener("click", () => {
        gsap.fromTo(".pointBlue", 1, { y: -200, opacity: 1 }, { y: 0, opacity: 1 })
        TweenMax.to(".textBlue,.titleBlue,.pointBlue", 1, { scaleX: 1, opacity: 1, delay: 1 })
    })
    const labelBlueDark = document.getElementById("labelTextBlueDark")
    labelBlueDark.addEventListener("click", () => {
        gsap.fromTo(".pointBlueDark", 1, { y: -200, opacity: 1 }, { y: 0, opacity: 1 })
        TweenMax.to(".textBlueDark,.titleBlueDark,.pointBlueDark", 1, { scaleX: 1, opacity: 1, delay: 1 })
    })
    const labelOrange = document.getElementById("labelTextOrange")
    labelOrange.addEventListener("click", () => {
        gsap.fromTo(".pointOrange", 1, { x: -200, opacity: 1 }, { x: 0, opacity: 1 })
        TweenMax.to(".textOrange,.titleOrange,.pointOrange", 1, { scaleX: 1, opacity: 1, delay: 1 })
    })
    const labelYellow = document.getElementById("labelTextYellow")
    labelYellow.addEventListener("click", () => {
        gsap.fromTo(".pointYellow", 1, { x: 200, opacity: 1 }, { x: 0, opacity: 1 })
        TweenMax.to(".textYellow,.titleYellow,.pointYellow", 1, { scaleX: 1, opacity: 1, delay: 1 })
    })


})