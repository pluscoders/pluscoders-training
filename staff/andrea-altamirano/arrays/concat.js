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