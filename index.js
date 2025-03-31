let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionTwo',
        start: "0% 95%",
        end: '50% 50%',
        scrub: true,
        // markers: true,
    }
});

tl.to('#fanta', {
    top: '130%',
    left: '10%',
}, 'orange')
.to('#orangeLeaf', {
    top: '160%',
    left: '23%',
    width: '25vw',
    duration: 0.5,
    scale: 0.6
}, 'orange')
.to('#orangeSlice', {
    top: '145%',
    left: '11%',
    rotate: '180deg'
}, 'orange')


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#sectionThree',
        start: "0% 95%",
        end: '50% 50%',
        scrub: true,
        // markers: true,
    }
});

tl2.from('.coca-lemon', {
    rotate: '270deg',
    left: '-90%',
    top: '80%'
}, 'lemon')
.from('.sprite-lemon', {
    rotate: '270deg',
    right: '-90%',
    top: '80%'
},  'lemon')
.from('.coca-cola', {
    scale: 0.8,
    rotate: '-20deg'
}, 'can')
.from('.sprite', {
    scale: 0.8,
    rotate: '20deg'
}, 'can')
.to('#fanta', {
    top: '222%',
    left: '34%',
    scale: 0.9,
}, 'lemon')
.to('#orangeSlice', {
    top: '220%',
    left: '43%',
    scale: 1.2,
    rotate: '360deg'
}, 'lemon')
.to('#orangeLeaf', {
    top: '130%',
    left: '8%',
    width: '20vw',
    scale: 1.2
}, 'lemon')
