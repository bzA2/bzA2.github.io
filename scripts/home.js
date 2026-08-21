window.onload = () => {
    Particles.init({
        selector: ".bg_particles",
        connectParticles: true,
        color: ["#2c2c2c", "#414141", "#7f7f7f"]
    })
}

const typed = new Typed('.desc_typed', {
    stringsElement: '.types_desc',
    typeSpeed: 60,
    loop: true,
    cursorChar: '_'
})

