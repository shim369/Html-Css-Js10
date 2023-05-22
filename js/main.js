TweenMax.from('.main-read', 1, {
    delay: 1,
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
