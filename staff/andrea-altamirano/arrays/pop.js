function pop(array){
    var final =''
    for (i=0; i< array.length -2; i++){
        var element = array[i]
       
       final= final + element

    }
    return final
}


*// one way
function pop(array){
    array.length = array.length -1

}

//test

numbers = ['1','2','3','4','5','6','7']
console.log(pop(numbers))
//result numbers = ['1','2','3','4','5','6']

animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes','alligator']
console.log(pop(animals))
//result animals = ['dogs', 'cats','elephant', 'whale', 'cocodriles','snakes']