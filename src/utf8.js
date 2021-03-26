const fs       = require('fs')
const argv     = process.argv.slice(2)
const encoding = 'utf16le'

function main() {
    let filepath = argv[0]
    let contents = fs.readFileSync(filepath).toString(encoding)
    fs.writeFileSync(filepath, contents)
}

main()
