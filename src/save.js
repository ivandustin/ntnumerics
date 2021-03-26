const fs     = require('fs')
const path   = require('path')
const OUTPUT = path.join(__dirname, '..', 'books')

function save(data) {
    if (fs.existsSync(OUTPUT) == false)
        fs.mkdirSync(OUTPUT)
    data.forEach(function(book) {
        let filename = book.book.toString().padStart(2, '0')
        let filepath = path.join(OUTPUT, filename + '.json')
        let content  = JSON.stringify(book, null, 4)
        fs.writeFileSync(filepath, content)
    })
}

module.exports = save
