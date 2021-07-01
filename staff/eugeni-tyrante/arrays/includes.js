// includes.js

// without fromIndex

function includes(array, searchElement) {
    var result = 0
        for (var i = 0; i < array.length; i++)
            if (array[i] === searchElement) {
                result++
            }
            if (result < 1) { 
                return false
            }
            else {
                return true
            }
    }

// with fromIndex

function includes(array, searchElement, fromIndex) {
    var result = 0
        for (var i = fromIndex; i < array.length; i++)
            if (array[i] === searchElement) {
                result++
            }
            if (result < 1) { 
                return false
            }
            else {
                return true
            }
    }