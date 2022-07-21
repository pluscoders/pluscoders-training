console.log('> recursion')

console.log('count')

function count(limit) {
    function iterate(val) {
        console.log(val)

        if (val < limit)
            iterate(val + 1)
    }

    iterate(1)
}

count(10)

console.log('forEach')

function forEach(array, callback) {
    function iterate(i) {
        var element = array[i]

        callback(element)

        if (i < array.length - 1)
            iterate(i + 1)
    }

    iterate(0)
}

forEach([1, 2, 3, 4, 5], console.log)

forEach(['a', 'b', 'c', 'd', 'e'], console.log)