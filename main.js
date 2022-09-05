/*  SCROLLBAR   */ 
let progress = document.getElementById('progressBar');
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function(){
            let progressHeight = (window.pageYOffset / totalHeight) * 100;
            progress.style.height = progressHeight + "%";
        }

/*   SHOW MENU    */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*    MENU SHOW   */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*   MENU HIDDEN  */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*  REMOVE MENU MOBILE  */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*    CHANGE BACKGROUND HEADER  */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('header-bg') 
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader) 

/* Scroll Reveal animation */
window.sr = ScrollReveal({reset: true});

    sr.reveal('.text.second-text',{
        duration: 3000,
        delay: 1200,
        origin: 'top',
        distance: -60,
    })

// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60',
//     duration: '2500',
// })

// sr.reveal(`.home__title`, {delay: 1500})
// sr.reveal(`h2`, {delay: 1500})
// sr.reveal('.home__description', {delay: 1200})
// sr.reveal(`.home__footer`, {delay: 1600})

/*      TYPING ANIMATION     */
const text = document.querySelector(".first-text");

const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "Hola, soy";
    }, 0);
    setTimeout(() => {
        text.textContent = "Hello, I'm";
    }, 4000, 0);
}
textLoad();
setInterval(textLoad, 8000);

// SOCIAL BUTTONS ANIMATION
const buttons = document.querySelectorAll('.social-buttons button');

                buttons.forEach(button => {

                    button.addEventListener('mousemove', e => {
                        const x = e.layerX - 60;
                        const y = e.layerY - 60;
                        const i = e.target.querySelector('i');
                        const bg = e.target.querySelector('.bg');
                        i.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
                        bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
                    });

                    button.addEventListener('mouseenter', e => {
                        const i = e.target.querySelector('i');
                        const bg = e.target.querySelector('.bg');
                        i.style.transition = 'all .15s ease';
                        bg.style.transition = 'all .15s ease';
                        setTimeout(() => {
                            i.style.transition = '';
                            bg.style.transition = '';    
                        }, 150);
                    });

                    button.addEventListener('mouseleave', e => {
                        const i = e.target.querySelector('i');
                        const bg = e.target.querySelector('.bg');
                        i.style.transition = 'all .25s ease';
                        bg.style.transition = 'all .25s ease';
                        i.style.transform = `translate(${0}px, ${0}px)`;
                        bg.style.transform = `translate(${0}px, ${0}px)`;
                        setTimeout(() => {
                            i.style.transition = '';
                            bg.style.transition = '';    
                        }, 250);
                    });

                });