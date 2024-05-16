
function revealFunction(){


    // initiatlize sr (scroll reveal)

    window.sr = ScrollReveal({
        origin : 'top',
        delay    : 300,
        opacity: 0,
        useDelay: 'once',
        mobile: true,
        reset: false,
        distance : '20px',
        easing   : 'ease-in-out',
    })

    sr.reveal('.img-responsive');


// need to learn how to sequence the reveal
    window.sr = ScrollReveal({
        origin : 'top',
        delay    : 150,
        opacity: 0,
        useDelay: 'once',
        mobile: true,
        reset: false,
        distance : '20px',
        easing   : 'ease-in-out',
    })

    sr.reveal('.thumbnail-reveal')
}



window.addEventListener('load', () => {

    revealFunction();

})