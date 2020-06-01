document.addEventListener("DOMContentLoaded", () => {

    gsap.fromTo(".char, .backWheel, #clip7, #clip6, #clip5, #clip4, #clip3, #clip2, #clip1, .frontWheel, #clip14, #clip13, #clip12, #clip11, #clip10, #clip9, #clip8",
        { x: -2000, y: 0 }, { x: 0, y: 0, duration: 3 })

    gsap.fromTo(".labelBlueDark", { x: -2000, y: 0 }, { x: 0, y: 0, duration: 4, delay: 4 })
    gsap.fromTo(".pointBlueDark", 1, { y: -200, opacity: 1 }, { y: 0, opacity: 1, delay: 8.4 })
    TweenMax.to(".textBlueDark,.titleBlueDark,.pointBlueDark", 1, { scaleX: 1, opacity: 1, delay: 9.5 })
    TweenMax.to("#labelTextBlueDark", 1, { opacity: 1, delay: 8 })

    gsap.fromTo(".labelBlue", { x: -2000, y: 0 }, { x: 0, y: 0, duration: 4, delay: 0 })
    gsap.fromTo(".pointBlue", 1, { y: -200, opacity: 1 }, { y: 0, opacity: 1, delay: 4.4 })
    TweenMax.to(".textBlue,.titleBlue,.pointBlue", 1, { scaleX: 1, opacity: 1, delay: 5.5 })
    TweenMax.to("#labelTextBlue", 1, { opacity: 1, delay: 4 })

    gsap.fromTo(".labelOrange", { x: -2000, y: 0 }, { x: 0, y: 0, duration: 4, delay: 12 })
    gsap.fromTo(".pointOrange", 1, { x: -200, opacity: 1 }, { x: 0, opacity: 1, delay: 16.4 })
    TweenMax.to(".textOrange,.titleOrange,.pointOrange", 1, { scaleX: 1, opacity: 1, delay: 17.5 })
    TweenMax.to("#labelTextOrange", 1, { opacity: 1, delay: 16 })

    gsap.fromTo(".labelYellow", { x: -2000, y: 0 }, { x: 0, y: 0, duration: 4, delay: 8 })
    gsap.fromTo(".pointYellow", 1, { x: 200, opacity: 1 }, { x: 0, opacity: 1, delay: 12.4 })
    TweenMax.to(".textYellow,.titleYellow,.pointYellow", 1, { scaleX: 1, opacity: 1, delay: 13.5 })
    TweenMax.to("#labelTextYellow", 1, { opacity: 1, delay: 12 })












})