/**
 * TODO
 * 
 * @param {*} arr 
 * @param {*} callback 
 */
function forEach(arr, callback) {
    // TODO validate arr is array and callback is a function

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i]

        callback(element, i, arr)
    }
}