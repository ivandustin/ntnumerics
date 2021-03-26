const groupby = require('./groupby')

function transform(data) {
    return groupby('book', data).map(function(book, index) {
        let chapters = groupby('chapter', book).map(function(chapter) {
            let verses = groupby('verse', chapter).map(function(verse) {
                return {
                    verse: verse[0].verse,
                    words: verse
                }
            })
            return {
                chapter: chapter[0].chapter,
                verses:  verses
            }
        })
        return {
            book:     index + 1,
            chapters: chapters
        }
    })
}

module.exports = transform
