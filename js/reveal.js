
function revealFunction(){


    // initiatlize sr (scroll reveal)

    window.sr = ScrollReveal({
        origin : 'top',
        delay    : 400,
        opacity: 0,
        useDelay: 'once',
        mobile: true,
        reset: false,
        distance : '20px',
        easing   : 'ease-in-out',
    })

    sr.reveal('.img-responsive')
}

window.addEventListener('load', () => {

    revealFunction();

})