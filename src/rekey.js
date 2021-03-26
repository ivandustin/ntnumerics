const header = require('./header')

function rekey(data) {
    return data.map(function(entry) {
        let object = {}
        for (let to in header) {
            let from = header[to]
            object[to] = entry[from]
        }
        return object
    })
}

module.exports = rekey
