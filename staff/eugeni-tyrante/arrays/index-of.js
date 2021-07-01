// index-of.js

// indexOf without fromIndex

function indexOf(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return(i)
        }
    }
}

// indexOf with fromIndex

function indexOf(array, element, fromIndex) {
    for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === element) {
            return(i)
        }
    }
}