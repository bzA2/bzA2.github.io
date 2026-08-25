const toggle_menu = async () => {
    if ($("#menu_list").css("display") === "none") {
        await $("#menu_list").slideDown(200, "swing")
    } else {
        await $("#menu_list").slideUp(200, "swing")
    }
}

$("#menubt").click(toggle_menu)