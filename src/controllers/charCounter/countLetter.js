function countLetter (array, letter, resource) {
    let count = 0
    array.map(string => {
        //case insensitive
        const toLowerString = string.toLowerCase()
        for (let index = 0; index < string.length; index++) {
            if (toLowerString.charAt(index) === letter) count++
        }
    })
    return { 
        "char": letter,
        "count": count,
        "resource": resource
    }
}

module.exports = countLetter
