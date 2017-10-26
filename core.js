
var app = app || {}


{
    let players = []
    app.players = players

    for (i=1; i<=3; i++) {
        let player = {}
            player.name = 'Игрок_' + i
            player.score = 0
        players.push(player)
    }

    let stage = {}
    app.stage = stage
    stage.current = {'screen': 'opening', 'params': null}

    app.round = 0

    app.changeScreen = function(screen, params=null) {
        stage.current = {'screen': 'opening', 'params': params}
        app.redrawInterface()
    }

    app.answerWrong = function(player, question) {
        player.score -= question.cost
    }

    app.answerRight = function(player, question) {
        player.score += question.cost
        question.answered = True
        app.changeScreen('grid')
    }

    app.answerTimeout = function(question) {
        question.answered = True
        app.changeScreen('grid')
    }

    app.finishRound = function() {
        app.round += 1
        app.changeScreen('title')
    }
}