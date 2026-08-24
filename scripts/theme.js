// 初始化主题, 0: 暗 1: 亮
const init_theme = () => {
    // 第一次进入网站时检测系统主题，并设置
    if (localStorage.getItem("/theme") === null) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("/theme", "0")
        } else {
            localStorage.setItem("/theme", "1")
        }
    }

    // 设置主题
    if (Number(localStorage.getItem("/theme"))) {
        document.documentElement.setAttribute("theme", "light")
    } else {
        document.documentElement.setAttribute("theme", "dark")
    }
}

// 更换主题
export const change_theme = () => {
    const theme = Number(localStorage.getItem("/theme"))

    if (theme) {
        localStorage.setItem("/theme", "0")
    } else {
        localStorage.setItem("/theme", "1")
    }

    document.documentElement.setAttribute("theme", (theme ? "dark" : "light"))
}

init_theme()