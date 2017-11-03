
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

    let stage = {'screen': 'title', 'params': null}
    app.stage = stage

    app.round = 0

    app.changeScreen = function(screen, params=null) {
        app.stage = {'screen': screen, 'params': params}
        app.redrawInterface()
    }

    app.startRound = function() {
        app.changeScreen('title')
    }

    app.selectQuestion = function(question) {
        app.changeScreen('question', params=question)
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
        app.startRound()
    }
}

app.audio = new Audio()