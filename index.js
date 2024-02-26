// javascrip here

gsap.registerPlugin(ScrollTrigger);

gsap.to('.home', {
    duration: 20,
    opacity:0,
    scrollTrigger: {
        trigger: '.home',
        start: '65% center',
        end: 'bottom center', 
        scrub: true,
        markers: true
    }
})

gsap.to('.scroll_down', {
    duration: 20,
    opacity:0,
    scrollTrigger: {
        trigger: '.home',
        start: '65% center',
        end: '75% center', 
        scrub: true,
        markers: true
    }
})