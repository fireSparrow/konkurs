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

{

    app.changeScreen = function(name, params) {
        let $main_frame = $("#main_frame")
        $main_frame.empty()
        let $obj = $("#"+name).clone()
        $obj.appendTo($main_frame)
        app.activate(name, obj, params)
    }

    app.activate = function(name, params) {
        switch(name) {
            case 'grid': fillGrid($obj); break;
        }

    }

    function fillGrid($obj) {
        let round = app.round
        let questions = app.questions
        let topics = questions[round]
        topics.forEach(function(topic, content){

        })
    }

}