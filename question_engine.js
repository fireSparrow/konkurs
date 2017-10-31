
app = app || {}


{
    class Question {

        constructor(cost, body) {
            this.cost = cost
            this.body = body
            this.answered = false
        }
    }


    function parseQuestions(text) {
        let round = null
        let topic = null
        let res = {}
        let rows = text.split('#')

        rows.forEach(function(row, i, arr){
            let tokens = row.split('@')

            for (t=0; t<tokens.length; t++) {
                let token = tokens[t]
                let pair = token.split(':').map(function(s){return s.trim()})
                let [key, value] = pair
                if (key=='round') {round = value; continue}
                if (key=='topic') {topic = value; continue}
                if (isFinite(key)) {
                    res[round] = res[round] || {}
                    res[round][topic] = res[round][topic] || []
                    console.log(res[round][topic])
                    res[round][topic].push(
                        new Question(cost=key, body=value)
                    )
                }
            }
        })
        return res
    }

    app.questions = parseQuestions(app.questions_raw)
}