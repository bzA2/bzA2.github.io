// 获取数据
export const get_data = async (type, target) => {
    const res = await fetch(`/data/${type}/${target}.json`, {
        method: "GET",
        mode: "same-origin",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return res.json()
}