const assert = require('assert')
const load   = require('../src/load')
const books  = load()

describe('book count', function() {
    it('is 27', function() {
        assert.equal(books.length, 27)
    })
})

describe('book chapter verse', function() {
    it('is correct', function() {
        books.forEach(function(book, book_index) {
            book.chapters.forEach(function(chapter, chapter_index) {
                chapter.verses.forEach(function(verse, verse_index) {
                    verse.words.forEach(function(word) {
                        let book    = book_index    + 1
                        let chapter = chapter_index + 1
                        let verse   = verse_index   + 1
                        
                        assert.equal(word.chapter, chapter)
                        assert.equal(word.verse,   verse)

                        if (word.book == 'Luke' && word.chapter == 22 && (word.verse == 43 || word.verse == 44)) {
                            assert.equal(word.book_chapter_verse[0], null)
                            assert.equal(word.book_chapter_verse[1], null)
                            assert.equal(word.book_chapter_verse[2], null)
                        } else {
                            assert.equal(word.book_chapter_verse[0], book)
                            assert.equal(word.book_chapter_verse[1], chapter)
                            assert.equal(word.book_chapter_verse[2], verse)
                        }
                    })
                })
            })
        })
    })
})

describe('book name', function() {
    it('is correct', function() {
        let names = [
            'Matt', 'Mark', 'Luke', 'John', 'Acts', 'Rom', '1 Cor', '2 Cor', 'Gal', 'Eph', 'Phlp', 'Col', '1 Ths', '2 Ths',
            '1 Tim', '2 Tim', 'Titus', 'Phlm', 'Heb', 'James', '1 Pet', '2 Pet', '1 John', '2 John', '3 John', 'Jude', 'Rev'
        ]

        books.forEach(function(book, index) {
            book.chapters.forEach(function(chapter) {
                chapter.verses.forEach(function(verse) {
                    verse.words.forEach(function(word) {
                        let actual   = word.book
                        let expected = names[index]

                        assert.equal(actual, expected)
                    })
                })
            })
        })
    })
})

describe('greek characters', function() {
    describe('distinct count', function() {
        it('is 24', function() {
            let hash       = {}
            let characters = []

            books.forEach(function(book, index) {
                book.chapters.forEach(function(chapter) {
                    chapter.verses.forEach(function(verse) {
                        verse.words.forEach(function(word) {
                            let characters = Array.from(word.greek)

                            characters.forEach(function(character) {
                                hash[character] = true
                            })
                        })
                    })
                })
            })
            characters = Object.keys(hash)
            assert.equal(characters.length, 24)
        })
    })

    describe('encoding', function() {
        it('is correct', function() {
            books.forEach(function(book, index) {
                book.chapters.forEach(function(chapter) {
                    chapter.verses.forEach(function(verse) {
                        verse.words.forEach(function(word) {
                            let characters = Array.from(word.greek)

                            characters.forEach(function(character) {
                                let code = character.charCodeAt(0)

                                assert(code >= 913)
                                assert(code <= 937)
                            })
                        })
                    })
                })
            })
        })
    })
})
