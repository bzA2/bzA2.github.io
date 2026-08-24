const toggle_menu = () => {
    const menu = document.getElementById("menu_list")

    if (menu.style.display === "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

document.getElementById("menubt").addEventListener("click", toggle_menu)