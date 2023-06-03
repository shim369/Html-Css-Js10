
TweenMax.from('.moon', .3, {
    delay: 1.6,
    width: "100%",
    height: "100%",
    background: "#eed770",
    display: "flex",
    zIndex: 997,
    borderRadius: 0,
    opacity: 1,
    top: "0%",
    left: "0%",
    fontSize: "3em",
    ease: Expo.easeInOut,
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

TweenMax.from('nav', .3, {
    delay: 2.2,
    opacity: 0,
    y: 20,
})

TweenMax.from('.open', .3, {
    delay: 2.5,
    zIndex: 0,
    opacity: 0,
})

TweenMax.from('.sub-read', .3, {
    delay: 2.8,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
})

TweenMax.from('.main-read', .3, {
    delay: 3.1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
})

TweenMax.from('.scrolldown', .3, {
    delay: 3.4,
    opacity: 0,
    y: -20,
    ease: Expo.easeInOut,
})