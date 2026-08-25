// 获取数据
export const get_data = async (target) => {
    const res = await fetch(`/data/${target}/${target}.json`, {
        method: "GET",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return res.json()
}