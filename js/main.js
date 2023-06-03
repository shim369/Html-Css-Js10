<<<<<<< HEAD
TweenMax.from('.cover', 1.5, {
    width: "100%",
    height: "100%",
    background: "#eed770",
    display: "flex",
    zIndex: 1000,
    opacity: 1,
    top: "0%",
    left: "0%",
})

TweenMax.from('.moon', .3, {
    delay: 1.6,
    width: "100%",
    height: "100%",
    background: "#eed770",
    display: "flex",
    zIndex: 999,
    borderRadius: 0,
    opacity: 1,
    top: "0%",
    left: "0%",
    fontSize: "3em",
    ease: Expo.easeInOut,
})

TweenMax.from('nav', .3, {
    delay: 1.9,
    opacity: 0,
    y: 20,
})

TweenMax.from('.moon-title', .3, {
    delay: 1.6,
    opacity: 1,
    display: "block",
})

TweenMax.from('.moon-text', .3, {
    delay: 1.9,
    opacity: 0,
    x: 20,
    display: "none",
    ease: Expo.easeInOut,
})

TweenMax.from('.open', .5, {
    delay: 2.2,
    opacity: 0,
})

TweenMax.from('.sub-read', .5, {
    delay: 2.2,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut,
})

TweenMax.from('.main-read', .5, {
    delay: 2.7,
=======
TweenMax.from('.logo', 1, {
    delay: 1,
>>>>>>> aa2adb2e85aede48bb8567371054a82849943c5a
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
})