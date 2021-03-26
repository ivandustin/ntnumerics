const header = require('./header')

function type(entries) {
    return entries.map(function(entry) {
        int(entry, header.chapter)
        int(entry, header.verse)
        int(entry, header.nt_word_position)
        int(entry, header.book_word_position)
        int(entry, header.letters)
        int(entry, header.word_total_value)
        int(entry, header.verse_letters)
        int(entry, header.verse_words)
        int(entry, header.verse_total_value)
        int(entry, header.chapter_letters)
        int(entry, header.chapter_words)
        int(entry, header.chapter_total_value)
        int(entry, header.book_letters)
        int(entry, header.book_words)
        int(entry, header.book_total_value)
        int(entry, header.cumulative_book_letters)
        int(entry, header.cumulative_book_words)
        int(entry, header.cumulative_book_total_value)
        chop3(entry, header.book_chapter_verse)
        return entry
    })
}

function int(object, key) {
    let value   = object[key]
    let result  = parseInt(value)
    object[key] = Number.isNaN(result) ? 0 : result
}

function chop3(object, key) {
    let value   = object[key]
    let result  = [
        parseInt(value.substring(0, 2)),
        parseInt(value.substring(2, 4)),
        parseInt(value.substring(4, 6))
    ]
    object[key] = result
}

module.exports = type
