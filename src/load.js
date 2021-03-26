const fs    = require('fs')
const path  = require('path')
const INPUT = path.join(__dirname, '..', 'books')

function load() {
    let filenames = fs.readdirSync(INPUT)
    let filepaths = filenames.map((filename)=> path.join(INPUT, filename))
    return filepaths.map(function(filepath) {
        let content = fs.readFileSync(filepath).toString()
        return JSON.parse(content)
    })
}

module.exports = load
