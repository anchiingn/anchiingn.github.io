// javascrip here

gsap.registerPlugin(ScrollTrigger);

gsap.to('.one', {
    duration: 20,
    opacity:0,
    scrollTrigger: {
        trigger: '.one',
        start: '65% center',
        end: 'bottom center', 
        scrub: true,
        markers: true
    }
})

