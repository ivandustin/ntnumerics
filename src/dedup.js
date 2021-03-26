const map = {
    65:   0x0391,
    913:  0x0391,
    72:   0x0397,
    919:  0x0397,
    79:   0x039f,
    927:  0x039f,
    8009: 0x039f,
    84:   0x03a4,
    932:  0x03a4,
    73:   0x0399,
    921:  0x0399,
    78:   0x039d,
    925:  0x039d
}

function main(books) {
    books.forEach(function(book, index) {
        book.chapters.forEach(function(chapter) {
            chapter.verses.forEach(function(verse) {
                verse.words.forEach(function(word) {
                    word.greek = dedup(word.greek)
                })
            })
        })
    })
    return books
}

function dedup(characters) {
    return Array.from(characters).map(mapper).join('')
}

function mapper(character) {
    let code    = character.charCodeAt(0)
    let newcode = map[code] ? map[code] : code
    return String.fromCharCode(newcode)
}

module.exports = main
