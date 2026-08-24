import { change_theme } from "./theme.js"

const get_theme = () => document.documentElement.getAttribute("theme") === "light"

// 根据主题选择粒子颜色
const get_particle_color = () => {
    if (get_theme()) {
        return ["#2c2c2c", "#414141", "#7f7f7f"]
    } else {
        return ["#f0f0f0", "#bebebe", "#a0a0a0"]
    }
}

// 图标颜色
const icon_color = () => {
    const bili_icon = document.getElementById("bilibili")
    const loft_icon = document.getElementById("lofter")

    if (get_theme()) {
        bili_icon.src = "/assets/icons/bilibili-light.svg"
        loft_icon.src = "/assets/icons/lofter-light.svg"
    } else {
        bili_icon.src = "/assets/icons/bilibili-dark.svg"
        loft_icon.src = "/assets/icons/lofter-dark.svg"
    }
}

// 注：因为主页这里换主题不仅换配色，还得重新换图标
const on_change_theme = () => {
    change_theme()
    icon_color()

    Particles.destroy()

    const new_particles = document.createElement("canvas")
    new_particles.className = "bg_particles"
    document.getElementById("home_background").appendChild(new_particles)

    Particles.init({
        selector: ".bg_particles",
        connectParticles: true,
        color: get_particle_color()
    })
}

document.getElementById("themebtn").addEventListener("click", on_change_theme)

const typed = new Typed('.desc_typed', {
    stringsElement: '.types_desc',
    typeSpeed: 60,
    loop: true,
    cursorChar: '_'
})

window.onload = () => {
    Particles.init({
        selector: ".bg_particles",
        connectParticles: true,
        color: get_particle_color()
    })
    icon_color()
}
