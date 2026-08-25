import { get_data } from "./get_data.js"
import { change_theme } from "./theme.js"

// // 定义日志组件
// class LogTag extends HTMLElement {
//     constructor() {
//         super()
//         const template = document.getElementById("log_template")
//         const shadow = this.attachShadow({ mode: 'closed' })
//         const content = template.content.cloneNode(true)

//         content.querySelector(".logs > .log_date").innerText = this.getAttribute("date")
//         content.querySelector(".logs > .log_content").innerText = this.getAttribute("content")

//         shadow.appendChild(content)
//     }
// }

// customElements.define('log-tag', LogTag)

let data = []

// 加载日志数据
const load = async () => {
    $("#loading").css("display", "block")

    const res = await get_data("logs")
    data = (res.logs ? res.logs : []) 
    console.log(data)

    // 将数据遍历渲染到页面
    const log_con = document.getElementById("log_container")
    data.forEach(log => {
        const template = document.getElementById("log_template")
        const content = template.content.cloneNode(true)
        content.querySelector(".logs > .log_date").innerText = log.date
        content.querySelector(".logs > .log_content").innerText = log.content
        log_con.appendChild(content)
    })

    $("#loading").css("display", "none")
}

$(document).ready(async () => {
    await load()
})

// 检测主题切换按钮
$("#themebtn").click(change_theme)