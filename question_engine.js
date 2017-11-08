
app = app || {}


{
    class Question {

        constructor(cost, body, answer, type) {
            this.cost = cost
            this.body = body
            this.answer = answer
            this.answered = false
            this.type = type
        }
    }


    function parseQuestions(text) {
        let round = null
        let topic = null
        let res = {}
        let rows = text.split('#')

        rows.forEach(function(row, i, arr){

            let pair = row.split('::').map(function(s){return s.trim()})
            let [key, value] = pair
            if (key=='round') {round = value}
            if (key=='topic') {topic = value}
            if (['100', '200', '300', '400', '500'].indexOf(key) > -1) {
                res[round] = res[round] || {}
                res[round][topic] = res[round][topic] || []

                let type = 'text'
                type = (value.indexOf('@IMG') > -1) ? 'image' : type
                type = (value.indexOf('@AUD') > -1) ? 'audio' : type

                let [body, answer] = value.split('[')
                    body = body.trim()
                    answer = answer.replace(']', '').trim()
                res[round][topic].push(
                    new Question(cost=(key*round), body, answer, type)
                )
            }
        })
        return res
    }

    app.questions = app.storage.get('questions') || parseQuestions(app.questions_raw)
}