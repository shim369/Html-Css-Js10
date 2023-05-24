TweenMax.from('.moon', .3, {
    delay: 3,
    width: "100%",
    height: "100%",
    background: "#eed770",
    display: "flex",
    zIndex: 999,
    borderRadius: 0,
    opacity: 1,
    top: "0%",
    left: "0%",
    fontSize: "5em",
})

TweenMax.from('.moon-title', .5, {
    delay: 2.6,
    opacity: 1,
    display: "block",
})

TweenMax.from('.moon-text', .5, {
    delay: 3.3,
    opacity: 0,
    display: "none",
})

TweenMax.from('.main-read', 1, {
    delay: 3.3,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
})

let pcNavLinks = document.querySelectorAll('.pc-nav .a-nav');
let spNav = document.querySelector('.sp-nav');
pcNavLinks.forEach(function(link) {
    let linkCopy = link.cloneNode(true);
    spNav.appendChild(linkCopy);
});

document.querySelector('.open').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.sp-nav').classList.toggle('panelactive');
    document.querySelector('.circle').classList.toggle('circleactive');
});

let navLinks = document.querySelectorAll('.sp-nav a');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        document.querySelector('.open').classList.remove('active');
        document.querySelector('.sp-nav').classList.remove('panelactive');
        document.querySelector('.circle').classList.remove('circleactive');
    });
}
