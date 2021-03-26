const assert    = require('assert')
const path      = require('path')
const parse     = require('./src/parse')
const type      = require('./src/type')
const rekey     = require('./src/rekey')
const transform = require('./src/transform')
const dedup     = require('./src/dedup')
const save      = require('./src/save')
const INPUT     = path.join(__dirname, 'LGNT-Data.txt')

function main() {
    let data = parse(INPUT)
    data     = type(data)
    data     = rekey(data)
    data     = transform(data)
    data     = dedup(data)
    save(data)
}

main()
