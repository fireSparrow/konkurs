
app = app || {}

app.const = app.const || {}
app.const.pic_title = ['pic/opening.png', 'pic/round1.png', 'pic/round2.png', 'pic/round3.png']
app.const.sound_title = ['sound/title.mp3', 'sound/round.mp3']

{
    tuneSize = function() {
        let wh = $(window).innerHeight()
        const BAR_HEIGHT = 100
        let rows = $("#main_table tr")
        rows.first().css('height', wh - BAR_HEIGHT - 30)
        rows.last().css('height', BAR_HEIGHT)
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
            showScore()
            activate(screen, obj, params)
            tuneSize()
    }

    window.onload = app.redrawInterface

    function activate(name, obj, params) {
        obj.show()
        switch(name) {
            case 'grid':
                fillGrid(obj)
                break
            case 'question':
                showQuestion(q=params)
                break
            case 'title':
                let img = obj.find('img')
                img.attr("src", app.const.pic_title[app.round])
                let [wh, ww] = [$(window).innerHeight(), $(window).innerWidth()]
                img.css('max-width', ww-30)
                img.css('max-height', wh-200)
                app.audio.src=app.const.sound_title[app.round ? 1 : 0]
                app.audio.play()
                break
        }
    }

    function showScore() {
        let screen = app.stage.screen
        if (screen == 'names' || screen == 'title') {return}
        $('#score_table').show()
        let panel = $('#score_panel')
        panel.empty()
        for (p in app.players){
            let player = app.players[p]
            let cell = $('<td>')
            cell.append($('<span>', {text: player.name}))
            if (screen == 'question') {
                let minus = $('<input>', {type: 'button', value: '-'})
                minus.bind('click', function(){app.answerWrong(player, question=app.stage.params); showScore()})
                let plus = $('<input>', {type: 'button', value: '+'})
                plus.bind('click', function(){app.answerRight(player, question=app.stage.params)})
                cell.append(minus)
                cell.append(plus)
            }
            cell.append($('<span>', {text: player.score}))
            panel.append(cell)
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
                let cost = q.answered ? '' : q.cost
                let td = $('<td>', {text: cost})
                if (~q.answered) {
                    td.bind('click', ()=>{app.changeScreen('question', params=q)})
                }
                tr.append(td)
            })
        }
    }

    function showQuestion(q){
        let screen = $('#main_screen')
        switch (q.type) {
            case 'text':
                screen.text(q.body)
                break
            case 'audio':
                app.audio.src = 'audio/'+q.body
                app.audio.play()
                break
            case 'image':
                let img = $('<img>', {src: 'img/'+q.body})
                let [ww, wh] = [$(window).innerWidth(), $(window).innerHeight()]
                img.css('max-width', ww-30)
                img.css('max-height', wh-200)
                screen.append(img)
                break
        }
    }
}

{
    function onKeyPress(e) {

        map_code = (c) => { switch(c) {
            case 83: case 115: case 1067: case 1099:
                return 'S'; break;
            case 82: case 114: case 1050: case 1082:
                return 'r'; break;
            case 32:
                return 'space'; break;
            case 84: case 116: case 1045: case 1077:
                return 't'; break;
        }}

        let key = map_code(e.keyCode)
        console.log(e.keyCode)
        let screen = app.stage.screen
        if (screen == 'title' && key == 'space') {
            let nxt = app.round ? 'grid' : 'title'
            app.round = app.round ? app.round : app.round+1
            app.changeScreen(nxt)
            return
        }
        if (screen == 'question' && key=='t') {
            app.answerTimeout()
            return
        }
        if (screen == 'question' && key=='r' && app.stage.params.type == 'audio') {
            app.audio.currentTime = 0
            app.audio.play()
            return
        }
        if (screen == 'question' && key=='S' && app.stage.params.type == 'audio') {
            if (app.audio.paused) {
                app.audio.play()
            } else if (app.audio.played) {
                app.audio.pause()
            }
            return
        }
        if (screen == 'grid' && key == 'space') {
            let questions = app.questions[app.round]
            for (topic in questions) {
                for (q in questions[topic]) {
                    if (!questions[topic][q].answered) {return}
                }
            }
            app.finishRound()
            return
        }
    }

    window.addEventListener("keypress", onKeyPress);
}