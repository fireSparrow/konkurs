
app = app || {}

app.const = app.const || {}
app.const.pic_title = ['pic/opening.gif', 'pic/round1.gif', 'pic/round2.gif', 'pic/round3.gif']
app.const.sound_title = ['sound/title.mp3', 'sound/round.mp3']

{
    tuneSize = function() {
        var wh = $(window).innerHeight()
        const BAR_HEIGHT = 100
        var $rows = $("#main_table tr")
        $rows.first().css('height', wh - BAR_HEIGHT - 25)
        $rows.last().css('height', BAR_HEIGHT)
    }

    window.onresize = tuneSize

    app.redrawInterface = function() {
            app.audio.pause()
            let {screen, params} = app.stage
            let main_frame = $("#main_frame").first()
            main_frame.empty()
            let obj = $("#"+screen).first().clone()
            obj.attr('id', 'main_screen')
            obj.appendTo(main_frame)
            activate(screen, obj, params)
            tuneSize()
    }

    window.onload = app.redrawInterface

    activate = function(name, obj, params) {
        obj.show()
        switch(name) {
            case 'grid': fillGrid(obj); break;
            case 'title':
                app.audio.src=app.const.sound_title[app.round ? 1 : 0]
                app.audio.play()
        }
    }

    function fillGrid(table) {
        let tbody = table.find('tbody')
        let round = app.round
        let questions = app.questions
        let topics = questions[round]
        for (t in topics) {
            let tr = $('<tr>')
            table.append(tr)
            tr.append($('<td>', {text: t}))
            topics[t].forEach(function(q){
                let td = $('<td>', {text: q.cost})
                td.bind('click', ()=>{app.changeScreen('question', params=q)})
                tr.append(td)
            })
        }
    }
}

{
    function onKeyPress(e) {
        let code = e.keyCode
        let screen = app.stage.screen
        if (screen == 'title' && code == 32) {
            let nxt = app.round ? 'grid' : 'title'
            app.round = app.round ? app.round : app.round+1
            $('#title').find('img').attr("src", app.const.pic_title[app.round])
            app.changeScreen(nxt)
        }
    }

    window.addEventListener("keypress", onKeyPress);
}