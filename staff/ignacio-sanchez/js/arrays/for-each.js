/**
 * TODO
 * 
 * @param {*} array 
 * @param {*} callback 
 */
function forEach(array, callback) {
    // TODO validate arr is array and callback is a function

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i, array)
    }
}