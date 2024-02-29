if (window.innerWidth > 700) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".project_container").forEach(e => {
        gsap.to(e, {
            duration: 20,
            opacity: 0,
            scrollTrigger: {
                trigger: e,
                start: '65% center',
                end: 'bottom center',
                scrub: true,
                // markers: true
            }
        });
    });

    gsap.to('#project_menu', {
        duration: 5,
        opacity: 0,
        scrollTrigger: {
            trigger: '#project_menu',
            start: 'top top',
            end: 'bottom 5%',
            scrub: true,
            markers: true
        }
    });
}


// gsap.utils.toArray('.project_num').forEach((element) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: 1,
//         }
//     })
//         .to(element, {
//             stagger: 1,
//             y: -35,
//             scrollTrigger: {
//                 trigger: element,
//                 start: '-10% 30%',
//                 end: '15% 35%',
//                 scrub: 2,
//                 // markers: true
//             }
//         });
// });

// gsap.utils.toArray('.p-name').forEach((element) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: 1,
//         }
//     })
//         .to(element, {
//             stagger: 1,
//             y: -20,
//             scrollTrigger: {
//                 trigger: element,
//                 start: '-100% 30%',
//                 end: '50% 35%',
//                 scrub: 2,
//                 // markers: true
//             }
//         });
// });

// gsap.utils.toArray('.project-bottom').forEach((element) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: 1,
//         }
//     })
//         .to(element, {
//             stagger: 1,
//             y: -30,
//             scrollTrigger: {
//                 trigger: element,
//                 start: '-75% 30%',
//                 end: '-15% 35%',
//                 scrub: 2,
//                 // markers: true
//             }
//         });
// });




// gsap.utils.toArray('.link_button').forEach((element) => {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: element,
//             scrub: 1,
//         }
//     })
//         .from(element, {
//             stagger: 1,
//             opacity:0,
//             scrollTrigger: {
//                 trigger: element,
//                 start: '-350px 30%',
//                 end: '-10% 35%',
//                 scrub: 2,
//                 // markers: true
//             }
//         });
// });

