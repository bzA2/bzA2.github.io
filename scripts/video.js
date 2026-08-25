import { get_data } from './get_data.js'
import { change_theme } from '/scripts/theme.js'

let videos = []

// 加载视频数据
const load = async () => {
    $("#loading").css("display", "block")

    const res = await get_data("videos")
    videos = (res.videos ? res.videos : []) 
    console.log(videos)

    // 将数据遍历渲染到页面
    const video_con = document.getElementById("videos")
    videos.forEach(video => {
        const template = document.getElementById("video_card")
        const content = template.content.cloneNode(true)
        content.querySelector("a").href = `https://www.bilibili.com/video/${video.bv}`
        content.querySelector(".video_cards > .cover").src = `/data/videos/covers/${video.bv}.jpg`
        content.querySelector(".video_cards > .title").innerText = video.title
        content.querySelector(".video_cards > .title").title = video.title
        content.querySelector(".video_cards > .date").innerText = video.date
        video_con.appendChild(content)
    })

    $("#loading").css("display", "none")
}

$(document).ready(async () => {
    await load()
})

// 检测主题切换按钮
$("#themebtn").click(change_theme)