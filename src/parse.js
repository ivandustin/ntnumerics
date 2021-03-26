const fs        = require('fs')
const delimiter = '\t'
const newline   = '\n'

function parse(filepath) {
    let contents = read(filepath)
    let lines    = contents.split(newline)
    let rows     = lines.map(parseline)
    let headers  = rows.shift()
    return rows.map(function(row) {
        let object = {}
        for (let i = 0; i < headers.length; i++) {
            let key     = headers[i]
            let value   = row[i] || ''
            object[key] = value
        }
        return object
    })
}

function read(filepath) {
    return fs.readFileSync(filepath).toString().trim()
}

function parseline(line) {
    return line.split(delimiter).map((word)=> word.trim())
}

module.exports = parse
