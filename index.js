if (window.innerWidth > 1000) {
    gsap.registerPlugin(ScrollTrigger);

    

    gsap.to('.one', {
        duration: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: '.one',
            start: '65% center',
            end: 'bottom center',
            scrub: true,
        }
    });

    gsap.to('.two', {
        duration: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: '.two',
            start: '65% center',
            end: 'bottom center',
            scrub: true,
        }
    });

    gsap.to('#project_menu', {
        duration: 5,
        opacity: 0,
        scrollTrigger: {
            trigger: '#project_menu',
            start: 'top top',
            end: 'bottom 5%',
            scrub: true,
        }
    });
}

document.body.style.scrollBehavior = 'smooth';

