const list = [
    ['Matt', 16,  3],
    ['Matt', 17, 21],
    ['Matt', 18, 11],
    ['Matt', 23, 14],
    ['Mark',  7, 16],
    ['Mark',  9, 44],
    ['Mark',  9, 46],
    ['Mark', 11, 26],
    ['Mark', 15, 28],
    ['Luke', 17, 36],
    ['Luke', 22, 43],
    ['Luke', 22, 44],
    ['Luke', 23, 17],
    ['John',  5,  4],
    ['Acts',  8, 37],
    ['Acts', 15, 34],
    ['Acts', 24,  7],
    ['Acts', 28, 29],
    ['Rom',  16, 24]
]

function omit(word) {
    let { book, chapter, verse } = word
    return ~list.findIndex((entry)=> entry[0] == book && entry[1] == chapter && entry[2] == verse)
}

module.exports = omit
