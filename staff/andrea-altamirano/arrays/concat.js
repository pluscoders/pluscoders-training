debugger
/*- 
const mammals = ['dogs', 'cats', 'elephant', 'whale'];
const reptiles = ['cocodriles', 'snakes', 'alligator'];
results -> []
results[0] -> [dogs']
results[1] -> ['dogs', 'cats']
results[2] -> ['dogs', 'cats','elephant']
results[3] -> ['dogs', 'cats','elephant', 'whale']
results[4] -> ['dogs', 'cats','elephant', 'whale', 'cocodriles']
results[5] -> ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes']
results[6] -> ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']
*/
function concat(array1, array2) {
    var result = []

    for (var i = 0; i < array1.length; i++) {
        result[i] = array1[i]
    }

    for (var i = 0; i < array2.length; i++) {
        result[array1.length + i] = array2[i]
    }

    return result
}

// tests

// case 1

const mammals = ['dogs', 'cats', 'elephant', 'whale']
const reptiles = ['cocodriles', 'snakes', 'alligator']

console.log(concat(mammals, reptiles))
     //animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']

// case 2

const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']
const array3 = concat(array1, array2)

console.log(array3)
// expected output: Array ["a", "b", "c", "d", "e", "f"]
