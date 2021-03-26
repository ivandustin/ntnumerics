const load = require('./load')

function main() {
    let books      = load()
    let characters = getCharacters(books)
    let codes      = getCodes(characters)
    console.log(characters.length)
    print(characters, codes)
}

function getCharacters(books) {
    let hash = {}
    books.forEach(function(book, index) {
        book.chapters.forEach(function(chapter) {
            chapter.verses.forEach(function(verse) {
                verse.words.forEach(function(word) {
                    let greek = word.greek
                    for (let i = 0; i < greek.length; i++) {
                        let character   = greek[i]
                        hash[character] = true

                        if (character.charCodeAt(0) == 65533) {
                            console.log(word)
                        }
                    }
                })
            })
        })
    })
    return Object.keys(hash).sort()
}

function getCodes(characters) {
    return characters.map((character)=> character.charCodeAt(0))
}

function print(characters, codes) {
    for (let i = 0; i < characters.length; i++) {
        let character = characters[i]
        let code      = codes[i]
        console.log(character, code)
    }
}

main()
