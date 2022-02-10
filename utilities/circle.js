const area = (rad) => {
    return (rad * rad) * Math.PI
}

const circumference = (rad) => {
    return 2 * Math.PI * rad
}

module.exports = {
    area,
    circumference
}