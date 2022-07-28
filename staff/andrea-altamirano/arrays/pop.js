function pop(array) {
    var last = array[array.length - 1]

    array.length = array.length - 1

    return last
}

// tests

// case 1

var numbers = ['1', '2', '3', '4', '5', '6', '7']
console.log(pop(numbers))
console.log(numbers)
//result numbers = ['1','2','3','4','5','6']

// case 2

var animals = ['dogs', 'cats', 'elephant', 'whale', 'cocodriles', 'snakes', 'alligator']
console.log(pop(animals))
console.log(animals)
//result animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes']