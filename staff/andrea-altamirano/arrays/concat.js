debugger
function concat(array1,array2) {
    /*- 
    const mammals = ['dogs', 'cats', 'elephant', 'whale'];
    const reptiles = ['cocodriles', 'snakes', 'alligator'];

     [dogs']
     ['dogs', 'cats']
     ['dogs', 'cats','elephant']
     ['dogs', 'cats','elephant', 'whale']
     ['dogs', 'cats','elephant', 'whale', 'cocodriles']
     ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes']
     ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']
    */
    var animals = ''
    for (i = 0; i < array1.length; i++) {
        var element = array1[i];
        var animals = animals + ',' + element
    }

    return animals = result
}

//tests
const mammals = ['dogs', 'cats', 'elephant', 'whale'];
const reptiles = ['cocodriles', 'snakes', 'alligator'];
console.log(concat(mammals, reptiles))
     //animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']
