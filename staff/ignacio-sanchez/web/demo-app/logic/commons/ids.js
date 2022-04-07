function makeId(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'

    let id = ''

    for (var i = 0; i < length / 2; i++)
        id += chars.charAt(Math.floor(Math.random() * chars.length))

    id += '-'

    for (var i = 0; i < length / 2; i++)
        id += numbers.charAt(Math.floor(Math.random() * numbers.length));

    return id
}