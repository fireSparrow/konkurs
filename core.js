
var app = app || {}

{
    app.storage = {}

    app.storage.get = function(name) {
        let ls = window.localStorage
        return JSON.parse(ls.getItem(name))
    }

    app.storage.set = function(name, obj) {
        let ls = window.localStorage
        ls.setItem(name, JSON.stringify(obj))
    }
}

{
    let players = app.storage.get('players')
    app.players = players || []

    let stage = app.storage.get('stage') || {'screen': 'names', 'params': null}
    app.stage = stage

    app.round = app.storage.get('round') || 0

    function saveState() {
        app.storage.set('players', app.players)
        app.storage.set('round', app.round)
        app.storage.set('stage', app.stage)
        app.storage.set('questions', app.questions)
    }

    app.changeScreen = function(screen, params=null) {
        app.stage = {'screen': screen, 'params': params}
        saveState()
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
        question.answered = true
        app.changeScreen('grid')
    }

    app.answerTimeout = function() {
        let question = app.stage.params
        question.answered = true
        app.changeScreen('grid')
    }

    app.finishRound = function() {
        app.round += 1
        app.startRound()
    }

    app.saveNames = function() {
        let vals = $('#main_screen input')
        for (let i=0; i<3; i++) {
            app.players[i] = app.players[i] ? app.players[i] : {}
            app.players[i].name = vals[i].value
            app.players[i].score = 0
        }
        app.changeScreen('title')
    }
}

app.audio = new Audio()