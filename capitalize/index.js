// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
    const arr = str.split(' ')
    const result = []
    console.log (arr)

    arr.forEach(word => {
        result.push(word[0].toUpperCase()) + result.push(word.slice(1))
    });
    return result.join(' ')
}

module.exports = capitalize;