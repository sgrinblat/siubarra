let anchoVentana = window.innerWidth;

if (anchoVentana > 1200){
    window.sr = ScrollReveal();

    sr.reveal(".scroll-top", {
        duration: 1000,
        origin: "top",
        distance: "100px",
    })

    sr.reveal(".logo-llegahoy", {
        duration: 1600,
        origin: "top",
        distance: "100px",
    })

    sr.reveal(".scroll-right", {
        duration: 4000,
        origin: "right",
        distance: "100px",
    })

    sr.reveal(".scroll-right-parrafos", {
        duration: 2000,
        origin: "right",
        distance: "100px",
    })

    sr.reveal(".scroll-left", {
        duration: 4000,
        origin: "left",
        distance: "100px",
    })

    sr.reveal(".scroll-left-parrafos", {
        duration: 4000,
        origin: "left",
        distance: "100px",
    })

    sr.reveal(".scroll-bottom", {
        duration: 2000,
        origin: "bottom",
        distance: "200px",
    })

} else {
    window.sr = ScrollReveal();
    
    sr.reveal(".scroll-top", {
        duration: 1000,
        origin: "top",
        distance: "100px",
    })

    sr.reveal(".logo-llegahoy", {
        duration: 1600,
        origin: "top",
        distance: "100px",
    })

    sr.reveal(".scroll-right", {
        duration: 4000,
        origin: "bottom",
        distance: "100px",
    })

    sr.reveal(".scroll-right-parrafos", {
        duration: 2000,
        origin: "bottom",
        distance: "100px",
    })

    sr.reveal(".scroll-left", {
        duration: 4000,
        origin: "bottom",
        distance: "100px",
    })

    sr.reveal(".scroll-left-parrafos", {
        duration: 4000,
        origin: "bottom",
        distance: "100px",
    })

    sr.reveal(".scroll-bottom", {
        duration: 2000,
        origin: "bottom",
        distance: "200px",
    })
}






