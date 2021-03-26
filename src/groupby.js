function groupby(key, array) {
    let result = []
    let hash   = {}
    array.forEach(function(entry) {
        let value   = entry[key]
        let group = hash[value]
        if (!group) {
            group = hash[value] = []
            result.push(group)
        }
        group.push(entry)
    })
    return result
}

module.exports = groupby
