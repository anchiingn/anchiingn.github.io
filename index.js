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
        markers: false
    }
})

gsap.to('#project_menu', {
    duration: 5,
    opacity:0,
    scrollTrigger: {
        trigger: '#project_menu',
        start: 'top 30%',
        end: 'bottom 10%', 
        scrub: true,
        markers: true
    }
})
