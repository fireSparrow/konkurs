function tuneSize() {
    var wh = $(window).innerHeight()
    const BAR_HEIGHT = 100
    var $rows = $("#main_table tr")
    $rows.first().css('height', wh - BAR_HEIGHT - 25)
    $rows.last().css('height', BAR_HEIGHT)
}

window.onresize = tuneSize;

document.addEventListener("DOMContentLoaded", tuneSize);


app = app || {}

app.changeScreen = function(name) {
    $(".screen").hide()
    $("#"+name).show()
}