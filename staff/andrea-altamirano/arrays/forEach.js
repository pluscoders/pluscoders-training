function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element)
    }
}

// tests

// case 1

const array1 = ['a', 'b', 'c']

forEach(array1, function(item) { 
    console.log(item) 
})

// "a"
// "b"
// "c"

// case 2

const numbers = [10, 20, 30]

forEach(numbers, function(item) { 
    console.log(item * 10) 
})

// 100
// 200
// 300