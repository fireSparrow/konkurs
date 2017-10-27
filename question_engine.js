
app = app || {}


{

    function parseQuestions(text) {
        let round = null
        let topic = null
        let res = []
        let rows = text.split('#')

        rows.forEach(functions(row, i, arr){
            let tokens = row.split('@')
            tokens.forEach(functions(token, i, arr) {
                let pair = token.split(':').map(function(s){s.trim()})
                let key, value = pair
                if (key=='round') {round = value; continue}
                if (key=='topic') {topic = value; continue}
            })
        })
    }
}