
app = app || {}


{
    class Question {

        constructor(cost, body, answer, is_image) {
            this.cost = cost
            this.body = body
            this.answer = answer
            this.answered = false
            this.is_image = is_image
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

                let is_image = (value.indexOf('@IMG') > -1)

                let [body, answer] = value.split('[')
                    body = body.trim()
                    answer = answer.replace(']', '').trim()
                res[round][topic].push(
                    new Question(cost=(key*round), body, answer, is_image)
                )
            }
        })
        return res
    }

    app.questions = app.storage.get('questions') || parseQuestions(app.questions_raw)
}